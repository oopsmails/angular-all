import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarFixedComponent } from "./components/navbar-fixed/navbar-fixed.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    NavbarFixedComponent,
    NotFoundComponent,
    // ElementChangingDirective,
    // MouseoverColorDirective,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavbarFixedComponent,
    // HomeComponent,
    FooterComponent,
    NotFoundComponent,
    // ElementChangingDirective,
    // MouseoverColorDirective
  ],
})
export class CoreModule { }
