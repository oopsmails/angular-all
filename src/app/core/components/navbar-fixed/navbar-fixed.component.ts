import { takeUntil } from 'rxjs/operators';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'navbar-fixed',
  templateUrl: './navbar-fixed.component.html',
  styleUrls: ['./navbar-fixed.component.scss'],
})
export class NavbarFixedComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('navbar') navbarElementRef: ElementRef;
  @ViewChild('menubar') menubarElementRef: ElementRef;

  faAngleDown = faAngleDown;
  // navbarClick: Subscription; // old way to unsubscribe

  private onDestroy$: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // this.navbarClick = fromEvent(this.navbarElementRef.nativeElement, 'click').subscribe(
    fromEvent(this.navbarElementRef.nativeElement, 'click')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((x) => {
        // console.log("NavbarFixedComponent, ngAfterViewInit ... ", x);
        this.menubarElementRef.nativeElement?.click();
      });
  }

  ngOnDestroy() {
    // this.navbarClick.unsubscribe(); // this is old way without takeUntil

    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
