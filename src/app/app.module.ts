
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppInitService } from './core/services/app.init.service';
import { ExampleModule } from './example/example.model';
import { HomeComponent } from './home/home.component';
import { CityFilterPipe } from './sandbox/city/city.filter.pipe';
import { SearchCityComponent } from './sandbox/city/search.city.component';
import { PlantFilterPipe } from './sandbox/plant/plant.filter.pipe';
import { SearchPlantComponent } from './sandbox/plant/search.plant.component';
import { SandboxModule } from './sandbox/sandbox.model';
import { UsStateService } from './sandbox/services/us.state.city.service';
import { SearchStateComponent } from './sandbox/us-state/search.state.component';
import { UsStateComponent } from './sandbox/us-state/us.state.component';
import { SharedModule } from './shared/shared.module';
import { StorePocModule } from './store-poc/store.poc.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    CoreModule,
    ExampleModule,
    SandboxModule,
    StorePocModule, // has to before AppRoutingModule
    AppRoutingModule
  ],
  providers: [
    AppInitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
