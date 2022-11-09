import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Observable, Subject } from 'rxjs';
import { SANDBOX_BACK_TO_HOME, SANDBOX_HOME_LINK } from '../models/sandbox.constants';
import { OptionItemService } from './option.item.service';

@Component({
  selector: 'app-option-item',
  templateUrl: './option.item.component.html',
  styleUrls: ['./option.item.component.scss']
})
export class OptionItemComponent implements OnInit, OnDestroy {
  linkText = SANDBOX_BACK_TO_HOME;
  routerLinkInput = SANDBOX_HOME_LINK;

  title = 'Trying Cache Data with Timeout';
  nowCurrent: number;

  public items$: Observable<any>;
  public showNewSection: boolean = false;

  private onDestory$: Subject<boolean> = new Subject();

  constructor(
    private optionItemService: OptionItemService
  ) {
    setInterval(() => {
      this.nowCurrent = Date.now();
    }, 1);
  }

  ngOnInit() {
    this.items$ = this.optionItemService.itemsReplay$.pipe(
      finalize(() => {
        console.log('finalized')
      })
    );
    setTimeout(() => this.showNewSection = true, 5000)

    // let mapLoader = timer(0, 130).subscribe(x => this.sandboxDataService.updateData());
    // timer(0, 30 * 1000).subscribe(x => this.sandboxDataService.updateData());
  }

  ngOnDestroy() {
    // console.log('------------- in ngOnDestroy ----------------');
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }

}
