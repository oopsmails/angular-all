import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { BackAngleComponent } from "./components/back-angle/back.angle.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarFixedComponent } from "./components/navbar-fixed/navbar-fixed.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    NavbarFixedComponent,
    NotFoundComponent,
    BackAngleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavbarFixedComponent,
    FooterComponent,
    NotFoundComponent,
    BackAngleComponent
  ],
})
export class CoreModule { }
