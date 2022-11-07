import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarFixedComponent } from './core/navbar-fixed/navbar-fixed.component';
import { AppInitService } from './core/services/app.init.service';
import { UtilsService } from './core/services/utils.service';
import { CityFilterPipe } from './example/city/city.filter.pipe';
import { SearchCityComponent } from './example/city/search.city.component';
import { PlantFilterPipe } from './example/plant/plant.filter.pipe';
import { SearchPlantComponent } from './example/plant/search.plant.component';
import { UsStateService } from './example/services/us.state.city.service';
import { SearchStateComponent } from './example/us-state/search.state.component';
import { UsStateComponent } from './example/us-state/us.state.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarFixedComponent,
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
    AppRoutingModule
  ],
  providers: [
    AppInitService,
    UtilsService,
    UsStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
