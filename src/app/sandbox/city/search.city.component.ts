import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsCity } from '../models/us.state.city.model';
import { UsStateService } from '../services/us.state.city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.city.component.html',
  styleUrls: ['./search.city.component.scss']
})
export class SearchCityComponent implements OnInit {
  usCities$: Observable<UsCity[]>;
  searchText: string = '';

  constructor(private usStateService: UsStateService) {
  }

  ngOnInit() {
    this.usCities$ = this.usStateService.getUsCities();
  }

}
