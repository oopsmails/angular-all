import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { defer, isObservable, Observable, of } from "rxjs";
import {
    first, map, mergeMap, shareReplay
} from "rxjs/operators";

import { renewAfterTimer } from "./renew-after-timer.observable";

@Injectable({
    providedIn: 'root',
})
export class SwapiService {
    private baseUrl: string = "https://swapi.dev/api"; // https://swapi.dev/api/people
    public people$: Observable<any>;

    constructor(private _http: HttpClient) { }

    public shared$: Observable<any>;
    private httpGet$ = this._http.get(`${this.baseUrl}/people`);

    createShared = () =>
    (this.shared$ = this.httpGet$.pipe(
        map((data: any) => {
            const random = Math.floor(Math.random() * 6);
            return data.results[random];
        }),
        shareReplay(1, 2500)
    ));

    public cachedRefreshable$ = this.createShared().pipe(
        first(null, defer(() => this.createShared())),
        mergeMap(d => (isObservable(d) ? d : of(d)))
    );

    public peopleReplay$ = this.cachedRefreshable$;
    public peopleReplay2$ = renewAfterTimer(this.httpGet$, 2500);
}
