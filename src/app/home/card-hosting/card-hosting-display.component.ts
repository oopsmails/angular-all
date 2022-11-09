import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeDataService } from '../home.data.service';
import { HOME_BACK_TO_HOME, HOME_HOME_LINK } from '../models/home.constants';

export class Card {
    public title: string;
    public text: string;
    public hide: boolean;

    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}

@Component({
    selector: 'app-card-hosting-display',
    template: `
    <app-back-angle [linkText]=linkText [routerLinkInput]=routerLinkInput></app-back-angle>
    <h3>Testing Directives: ElementChangingDirective and MouseoverColorDirective</h3>
    <app-card-hosting [cards]="cards$ | async"></app-card-hosting>
  `
})
export class CardHostingDisplayComponent implements OnInit {

    linkText = HOME_BACK_TO_HOME;
    routerLinkInput = HOME_HOME_LINK;

    cards$: Observable<Card[]>;

    constructor(private homeDataService: HomeDataService) { }

    ngOnInit() {
        this.cards$ = this.homeDataService.getCards();
    }

}
