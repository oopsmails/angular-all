import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { HomeDataService } from "./home.data.service";
import { Card } from "./models/home.models";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private onDestory$: Subject<boolean> = new Subject();

  cards$: Observable<Card[]>;

  constructor(
    private router: Router
    , private homeDataService: HomeDataService
  ) { }

  ngOnInit() {
    this.cards$ = this.homeDataService.getCards();
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
