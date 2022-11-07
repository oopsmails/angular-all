import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-plant',
  templateUrl: './search.plant.component.html',
  styleUrls: ['./search.plant.component.scss']
})
export class SearchPlantComponent implements OnInit {
  searchStr = '';
  allItems!: any[];

  constructor(private httpClient: HttpClient, private dataService: DataService) {
  }

  ngOnInit() {
    this.httpClient.get('assets/mockdata/plants.json').subscribe(data => {
      console.log('Loading plants ..... ');
      if (data) {
        this.allItems = Object.values(data);
      }
    });
  }
}
