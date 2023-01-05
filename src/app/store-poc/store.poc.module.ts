import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TranslateModule } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PostsModule } from "./posts/posts.module";
import { StorePocDataService } from "./services/store.poc.data.service";
import { StorePocHomeComponent } from "./store.poc.home.component";

const routes: Routes = [
  { path: 'store/home', component: StorePocHomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    PostsModule,
    SharedModule,
    TranslateModule.forRoot(),
    RouterModule.forChild(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  declarations: [
    StorePocHomeComponent
  ],
  providers: [
    StorePocDataService
  ]
})
export class StorePocModule { }
