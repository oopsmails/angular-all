import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";


@Component({
  selector: 'app-sandbox-home',
  templateUrl: './sandbox.home.component.html',
  styleUrls: ['./sandbox.home.component.scss']
})
export class SandboxHomeComponent implements OnInit, OnDestroy {
  private onDestory$: Subject<boolean> = new Subject();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

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
