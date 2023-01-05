import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/home.models';

@Component({
  selector: 'app-card-hosting',
  template: `
    <app-card *ngFor="let card of cards" [card]="card"></app-card>
  `
})
export class CardHostingComponent implements OnInit {

  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
