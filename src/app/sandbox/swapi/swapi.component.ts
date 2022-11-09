import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SANDBOX_BACK_TO_HOME, SANDBOX_HOME_LINK } from '../models/sandbox.constants';
import { SwapiService } from './swapi.service';
@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.scss']
})
export class SwapiComponent implements OnInit, OnDestroy {
  linkText = SANDBOX_BACK_TO_HOME;
  routerLinkInput = SANDBOX_HOME_LINK;

  title = 'Trying Cache Data with Timeout';
  public people$: Observable<any>;

  public showNewSection: boolean = false;

  constructor(private _swapi: SwapiService) { }

  ngOnInit() {
    this.people$ = this._swapi.peopleReplay$.pipe(
      finalize(() => {
        console.log('finalized')
      })
    );
    // if this smaller than the number in SwapiService, working. But, nav away to other page then nav back, might NOT working anymore!
    setTimeout(() => this.showNewSection = true, 2000) 

    // bigger, so, the second will NOT be same as the first, i.e, beyone cache time period!
    // setTimeout(() => this.showNewSection = true, 5000) 
  }

  ngOnDestroy() {
    // console.log('SwapiComponent, ------------- in ngOnDestroy ----------------');
  }

}
