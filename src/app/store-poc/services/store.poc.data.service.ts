import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class StorePocDataService implements OnDestroy {
    private onDestroy$: Subject<boolean> = new Subject();

    constructor(private httpClient: HttpClient
    ) { }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
