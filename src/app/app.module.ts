import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ExampleModule } from './example/example.model';
import { HomeModule } from './home/home.module';
import { SandboxModule } from './sandbox/sandbox.model';
import { SharedModule } from './shared/shared.module';
import { StorePocModule } from './store-poc/store.poc.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    CoreModule,
    HomeModule,
    ExampleModule,
    SandboxModule,
    StorePocModule, // has to before AppRoutingModule
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
