import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HighlighterPipe } from "./pipes/highlighter.pipe";
import { UtilsService } from "./services/utils.service";

@NgModule({
  declarations: [
    HighlighterPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlighterPipe,
  ],
  providers: [
    UtilsService
  ]
})
export class SharedModule { }
