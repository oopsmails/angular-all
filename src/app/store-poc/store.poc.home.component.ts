import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";


@Component({
  selector: 'home',
  templateUrl: './store.poc.home.component.html',
  styleUrls: ['./store.poc.home.component.scss']
})
export class StorePocHomeComponent implements OnInit, OnDestroy {
  private onDestory$: Subject<boolean> = new Subject();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('in StoreHomeComponent');
  }

  navToPage(page) {
    console.log('StoreHomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
