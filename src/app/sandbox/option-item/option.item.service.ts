import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, of, Subject, timer } from 'rxjs';
import { map, shareReplay, switchMap, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OptionItemService implements OnDestroy {
  public optionItemsSlice = [
    { optionId: 1, optionTitle: 'option 1' },
    { optionId: 2, optionTitle: 'option 2' },
    { optionId: 3, optionTitle: 'option 3' },
  ];

  private onDestroy$: Subject<boolean> = new Subject();

  private httpGet$ = of(this.optionItemsSlice);
  private _itemData$ = new BehaviorSubject<void>(undefined);
  private timer$ = timer(0, 30 * 1000).pipe(takeUntil(this.onDestroy$));

  sharingNowDateStr: string;

  constructor(private httpClient: HttpClient) {
    this.timer$.subscribe((x) => this.updateData());
  }

  public apiRequest$ = this.httpGet$.pipe(
    map((items: any) => {
      this.sharingNowDateStr = new Date().toLocaleTimeString();
      return items.map((item) => ({
        ...item,
        // processed: new Date().toISOString(),
        processed: this.sharingNowDateStr,
      }));
    })
  );

  public itemsReplay$ = this._itemData$.pipe(
    switchMap(() => this.apiRequest$),
    shareReplay(1)
  );

  public updateData() {
    this._itemData$.next();
  }

  ngOnDestroy() {
    console.log('------------- in SandboxDataService, ngOnDestroy ----------------');
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
