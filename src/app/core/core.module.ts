import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell as farBell, far, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBell as fasBell,
  faCoffee,
  faFilm,
  faFish,
  faLock,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../shared/shared.module';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [AppNavBarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule.forChild([]),
  ],
  exports: [CommonModule, BrowserModule, FontAwesomeModule, AppNavBarComponent],
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    // The only disadvantage of this approach is the project bundle size will increase.So it is better to add the necessary icons to the library instead of adding all icons.
    // library.addIconPacks(fas, fab, far); // If you want to use all available icons, add all icon styles to font awesome icon library using addIconPacks() method.

    library.addIcons(faFilm, faFish, faCoffee, faUser, faLock, farBell, fasBell);

    // library.addIcons(faFilm, faFish, farBell, fasBell);
    library.addIconPacks(fas, far, fab);
    // library.addIconPacks(fab);

    //legacy old library way
    legacyLibrary.add(faFilm, faFish, farBell, fasBell);
    //legacyLibrary.add(fas,far,fab);
  }
}
