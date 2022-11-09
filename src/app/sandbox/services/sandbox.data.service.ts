import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import {
    mergeMap,
    Observable,
    of,
    Subject, takeUntil, timer
} from 'rxjs';
import { OptionItem } from 'src/app/shared/models/sample.model';
import { UsState } from '../models/us.state.city.model';
import { UsStateService } from '../us-state/us.state.city.service';

@Injectable({
    providedIn: 'root',
})
export class SandboxDataService implements OnDestroy {

    public optionItems = [
        { optionId: 1, optionTitle: 'option 1' },
        { optionId: 2, optionTitle: 'option 2' },
        { optionId: 3, optionTitle: 'option 3' },
        { optionId: 4, optionTitle: 'option 4' },
        { optionId: 5, optionTitle: 'option 5' },
        { optionId: 6, optionTitle: 'option 6' },
        { optionId: 7, optionTitle: 'option 7' },
        { optionId: 8, optionTitle: 'option 8' },
        { optionId: 9, optionTitle: 'option 9' },
        { optionId: 10, optionTitle: 'option 10' },
        { optionId: 11, optionTitle: 'option 11' },
        { optionId: 12, optionTitle: 'option 12' },
        { optionId: 13, optionTitle: 'option 13' },
        { optionId: 14, optionTitle: 'option 14' },
        { optionId: 15, optionTitle: 'option 15' },
        { optionId: 16, optionTitle: 'option 16' },
        { optionId: 17, optionTitle: 'option 17' },
        { optionId: 18, optionTitle: 'option 18' },
        { optionId: 19, optionTitle: 'option 19' },
        { optionId: 20, optionTitle: 'option 20' },
    ];

    private onDestroy$: Subject<boolean> = new Subject();

    constructor(private httpClient: HttpClient
        , private usStateService: UsStateService
    ) { }

    getOptionData(): Observable<OptionItem[]> {
        return of(this.optionItems);
    }

    mockHttpGetAllUsStates(): Observable<UsState[]> {
        const timertTime = Math.floor(Math.random() * 5000);
        // const timertTime = Math.floor(Math.random() * 8000);
        console.log(`Mock time taken by API: ${timertTime} milliseconds`);

        return timer(timertTime).pipe(
            mergeMap(() => {
                return this.usStateService.getUsStateCity()
            }),
            takeUntil(this.onDestroy$)
        )
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
