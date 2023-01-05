import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsCity } from 'src/app/shared/models';
import { SANDBOX_BACK_TO_HOME, SANDBOX_HOME_LINK } from '../models/sandbox.constants';
import { UsStateService } from '../us-state/us.state.city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.city.component.html',
  styleUrls: ['./search.city.component.scss'],
})
export class SearchCityComponent implements OnInit {
  linkText = SANDBOX_BACK_TO_HOME;
  routerLinkInput = SANDBOX_HOME_LINK;

  usCities$: Observable<UsCity[]>;
  searchText: string = '';

  constructor(private usStateService: UsStateService) {}

  ngOnInit() {
    this.usCities$ = this.usStateService.getUsCities();
  }
}
