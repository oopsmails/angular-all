import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RandomItem } from '../shared/models';
import { SharedDataService } from '../shared/services/shared.data.service';

@Injectable({
  providedIn: 'root',
})
export class ExampleDataService implements OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient, private sharedDataService: SharedDataService) {}

  getOptionData(): Observable<RandomItem[]> {
    return this.sharedDataService.getRandomItems();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
