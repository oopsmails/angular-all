import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ElementChangingDirective } from './directives/element-changing.directive';
import { MouseoverColorDirective } from './directives/mouseover-color.directive';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { UtilsService } from './services/utils.service';

import { faCoffee, faFilm, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { faBell as fasBell } from '@fortawesome/free-solid-svg-icons';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';

@NgModule({
    declarations: [HighlighterPipe, ElementChangingDirective, MouseoverColorDirective],
    imports: [
        CommonModule,
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [
        CommonModule,
        BrowserModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HighlighterPipe,
        ElementChangingDirective,
        MouseoverColorDirective,
    ],
    providers: [UtilsService],
})
export class SharedModule {
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
