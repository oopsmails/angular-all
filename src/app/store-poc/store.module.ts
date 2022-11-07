import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { StorePocDataService } from "./services/store.poc.data.service";
import { StorePocHomeComponent } from "./store.poc.home.component";

const routes: Routes = [
  { path: 'store/home', component: StorePocHomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    TranslateModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    StorePocHomeComponent
  ],
  providers: [
    StorePocDataService
  ]
})
export class StorePocModule { }
