import { Component, OnDestroy, OnInit } from '@angular/core';
import { SANDBOX_BACK_TO_HOME, SANDBOX_HOME_LINK } from '../models/sandbox.constants';
import { NbaService } from './nba.service';

@Component({
  selector: 'app-nba-player',
  templateUrl: './nba.player.component.html',
  styleUrls: ['./nba.player.component.scss']
})
export class NbaPlayerComponent implements OnInit, OnDestroy {
  linkText = SANDBOX_BACK_TO_HOME;
  routerLinkInput = SANDBOX_HOME_LINK;

  players$ = this.nbaService.players$;

  constructor(private nbaService: NbaService) { }

  ngOnInit() {

  }

  refreshData() {
    this.nbaService.updateData();
  }

  checkRender(): boolean {
    // console.log('#### checkRender ####');
    return true;
  }

  ngOnDestroy() {
    // console.log('------------- in NbaPlayerComponent, ngOnDestroy ----------------');
  }
}
