import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsCity, UsState } from '../models/us.state.city.model';
import { UsStateService } from '../services/us.state.city.service';

@Component({
  selector: 'app-us-state',
  templateUrl: './us.state.component.html'
})
export class UsStateComponent implements OnInit {
  usStates$: Observable<UsState[]>;
  usCities$: Observable<UsCity[]>;

  constructor(private usStateService: UsStateService) {
  }
  ngOnInit() {
    this.usStates$ = this.usStateService.getUsStateCity();
    this.usCities$ = this.usStateService.getUsCities();
  }
}
