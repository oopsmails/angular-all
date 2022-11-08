import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { UsCity, UsState } from '../models/us.state.city.model';
import { UsStateService } from '../services/us.state.city.service';

@Component({
  selector: 'app-us-state',
  templateUrl: './us.state.component.html'
})
export class UsStateComponent implements OnInit {
  faAngleLeft = faAngleLeft;

  usStates$: Observable<UsState[]>;
  usCities$: Observable<UsCity[]>;

  constructor(private usStateService: UsStateService) {
  }
  ngOnInit() {
    this.usStates$ = this.usStateService.getUsStateCity();
    this.usCities$ = this.usStateService.getUsCities();
  }
}
