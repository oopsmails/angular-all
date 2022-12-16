import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsCity, UsState } from 'src/app/shared/models';
import { SANDBOX_BACK_TO_HOME, SANDBOX_HOME_LINK } from '../models/sandbox.constants';
import { UsStateService } from './us.state.city.service';

@Component({
  selector: 'app-us-state',
  templateUrl: './us.state.component.html',
  styleUrls: ['./us.state.component.scss'],
})
export class UsStateComponent implements OnInit {
  linkText = SANDBOX_BACK_TO_HOME;
  routerLinkInput = SANDBOX_HOME_LINK;

  usStates$: Observable<UsState[]>;
  usCities$: Observable<UsCity[]>;

  constructor(private usStateService: UsStateService) {}
  ngOnInit() {
    this.usStates$ = this.usStateService.getUsStateCity();
    this.usCities$ = this.usStateService.getUsCities();
  }
}
