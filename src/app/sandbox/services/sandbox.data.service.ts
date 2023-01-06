import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { mergeMap, Observable, Subject, takeUntil, timer } from 'rxjs';
import { RandomItem, UsState } from 'src/app/shared/models';
import { SharedDataService } from 'src/app/shared/services/shared.data.service';
import { UsStateService } from '../us-state/us.state.city.service';

@Injectable({
  providedIn: 'root',
})
export class SandboxDataService implements OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(
    private httpClient: HttpClient,
    private usStateService: UsStateService,
    private sharedDataService: SharedDataService
  ) {}

  getOptionData(): Observable<RandomItem[]> {
    return this.sharedDataService.getRandomItems();
  }

  mockHttpGetAllUsStates(): Observable<UsState[]> {
    const timertTime = Math.floor(Math.random() * 5000);
    // const timertTime = Math.floor(Math.random() * 8000);
    console.log(`Mock time taken by API: ${timertTime} milliseconds`);

    return timer(timertTime).pipe(
      mergeMap(() => {
        return this.usStateService.getUsStateCity();
      }),
      takeUntil(this.onDestroy$)
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
