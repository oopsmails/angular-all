import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { defer, isObservable, Observable, of } from "rxjs";
import { first, map, mergeMap, shareReplay, tap } from "rxjs/operators";
import { OptionItem } from "src/app/shared/models/sample.model";

@Injectable({
    providedIn: 'root',
})
export class SandboxDataService {
    public optionItems = [
        { optionId: 1, optionTitle: 'option 1' },
        { optionId: 2, optionTitle: 'option 2' },
        { optionId: 3, optionTitle: 'option 3' },
        // { optionId: 4, optionTitle: 'option 4' },
        // { optionId: 5, optionTitle: 'option 5' },
        // { optionId: 6, optionTitle: 'option 6' },
        // { optionId: 7, optionTitle: 'option 7' },
        // { optionId: 8, optionTitle: 'option 8' },
        // { optionId: 9, optionTitle: 'option 9' },
        // { optionId: 10, optionTitle: 'option 10' },
        // { optionId: 11, optionTitle: 'option 11' },
        // { optionId: 12, optionTitle: 'option 12' },
        // { optionId: 13, optionTitle: 'option 13' },
        // { optionId: 14, optionTitle: 'option 14' },
        // { optionId: 15, optionTitle: 'option 15' },
        // { optionId: 16, optionTitle: 'option 16' },
        // { optionId: 17, optionTitle: 'option 17' },
        // { optionId: 18, optionTitle: 'option 18' },
        // { optionId: 19, optionTitle: 'option 19' },
        // { optionId: 20, optionTitle: 'option 20' },
    ];

    private httpGet$ = of(this.optionItems);
    public shared$: Observable<any>;

    constructor(private httpClient: HttpClient) {

    }

    // ---------------------- from swapi.service.ts NOT working!!! -----------------------
    createShared = () =>
    (this.shared$ = this.httpGet$.pipe(
        map((items: any) => {
            return items.map((item) => ({
                ...item,
                origItem: `${item.optionId} ${item.optionTitle}`,
                processed: new Date().toISOString(),
            }));
        }),
        // if using 30000, nav away and nav back after 30000, then not working anymore!!!
        shareReplay(1, 30000) // here, using 2500, comparing with in component, setTimeout(() => this.showNewSection = true, 5000)
    ));

    public cachedRefreshable$ = this.createShared().pipe(
        first(null, defer(() => this.createShared())),
        mergeMap(d => (isObservable(d) ? d : of(d)))
    );

    public itemsReplay$ = this.cachedRefreshable$;
    // public itemsReplay2$ = renewAfterTimer(this.httpGet$, 2500);
    // ---------------------------------------------

    getOptionsItems(): Observable<OptionItem[]> {
        return of(this.optionItems);
    }

    getRandomItems(): Observable<OptionItem[]> {
        // const random = Math.floor(Math.random() * this.optionItems.length);
        // return of(this.optionItems[random]);

        const rand = this.optionItems[(Math.random() * this.optionItems.length) | 0];

        return this.getOptionsItems().pipe(
            tap(items => console.log(items))
        );
    }

}