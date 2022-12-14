import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SANDBOX_BACK_TO_HOME, SANDBOX_HOME_LINK } from '../models/sandbox.constants';
import { SandboxDataService } from '../services/sandbox.data.service';
@Component({
  selector: 'app-search-plant',
  templateUrl: './search.plant.component.html',
  styleUrls: ['./search.plant.component.scss']
})
export class SearchPlantComponent implements OnInit, OnDestroy {
  linkText = SANDBOX_BACK_TO_HOME;
  routerLinkInput = SANDBOX_HOME_LINK;

  searchStr = '';
  allItems!: any[];

  private onDestroy$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient, private sandboxDataService: SandboxDataService) {
  }

  ngOnInit() {
    this.httpClient.get('assets/mockdata/plants.json')
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(data => {
        console.log('Loading plants ..... ');
        if (data) {
          this.allItems = Object.values(data);
        }
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
