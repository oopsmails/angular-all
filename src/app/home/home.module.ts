import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { CardHostingDisplayComponent } from "./card-hosting/card-hosting-display.component";
import { CardHostingComponent } from "./card-hosting/card-hosting.component";
import { CardComponent } from "./card-hosting/card.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: 'home/home', component: HomeComponent },
  { path: 'home/card-host', component: CardHostingDisplayComponent }
];


@NgModule({
  declarations: [
    HomeComponent,
    CardHostingComponent,
    CardComponent,
    CardHostingDisplayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [

  ],
})
export class HomeModule { }
