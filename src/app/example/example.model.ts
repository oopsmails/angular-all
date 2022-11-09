import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { ExampleHomeComponent } from "./example.home.component";

const routes: Routes = [
    { path: 'example/home', component: ExampleHomeComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        TranslateModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    declarations: [
        ExampleHomeComponent
    ],
    providers: [

    ]
})
export class ExampleModule { }
