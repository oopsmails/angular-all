import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OptionItem } from 'src/app/shared/models/sample.model';
import { SharedDataService } from '../shared/services/shared.data.service';

@Injectable({
    providedIn: 'root',
})
export class ExampleDataService implements OnDestroy {
    private onDestroy$: Subject<boolean> = new Subject();

    constructor(private httpClient: HttpClient, private sharedDataService: SharedDataService) {}

    getOptionData(): Observable<OptionItem[]> {
        return this.sharedDataService.getOptionData();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
