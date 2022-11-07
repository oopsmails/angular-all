
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarFixedComponent } from './core/navbar-fixed/navbar-fixed.component';
import { AppInitService } from './core/services/app.init.service';
import { HomeComponent } from './home/home.component';
import { CityFilterPipe } from './sandbox/city/city.filter.pipe';
import { SearchCityComponent } from './sandbox/city/search.city.component';
import { PlantFilterPipe } from './sandbox/plant/plant.filter.pipe';
import { SearchPlantComponent } from './sandbox/plant/search.plant.component';
import { UsStateService } from './sandbox/services/us.state.city.service';
import { SearchStateComponent } from './sandbox/us-state/search.state.component';
import { UsStateComponent } from './sandbox/us-state/us.state.component';
import { SharedModule } from './shared/shared.module';
import { StorePocModule } from './store-poc/store.module';


@NgModule({
  declarations: [
    AppComponent,
    // NavbarFixedComponent,
    HomeComponent,
    SearchCityComponent,
    SearchPlantComponent,
    SearchStateComponent,
    UsStateComponent,
    CityFilterPipe,
    PlantFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    CoreModule,
    StorePocModule, // has to before AppRoutingModule
    AppRoutingModule
  ],
  providers: [
    AppInitService,
    UsStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
