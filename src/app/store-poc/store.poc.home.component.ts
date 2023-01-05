import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './store.poc.home.component.html',
  styleUrls: ['./store.poc.home.component.scss'],
})
export class StorePocHomeComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('in StoreHomeComponent');
  }

  navToPage(page) {
    console.log('StoreHomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
