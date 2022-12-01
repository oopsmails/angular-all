import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { SANDBOX_BACK_TO_HOME, SANDBOX_HOME_LINK } from '../models/sandbox.constants';

@Component({
  selector: 'app-fa-test',
  templateUrl: './fa.test.component.html',
  styleUrls: ['./fa.test.component.scss'],
})
export class FaTestComponent implements OnInit, OnDestroy {
  private onDestory$: Subject<boolean> = new Subject();

  linkText = SANDBOX_BACK_TO_HOME;
  routerLinkInput = SANDBOX_HOME_LINK;

  warning =
    'To make below all working, need to add library.addIconPacks(fas, far, fab); in shared.module.ts. \n This will make project size much bigger!!!';

  filmIcon = faFilm;

  rotate90 = 90;
  rotate180 = 180;
  rotate270 = 270;

  rotation = -15;

  isAnimated = true;
  // pullLeft = 'left' as PullProp;
  // pullRight = 'right' as PullProp;

  constructor(private router: Router) {}

  ngOnInit() {}

  changeRotation(value) {
    this.rotation = value;
  }

  ngOnDestroy() {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
