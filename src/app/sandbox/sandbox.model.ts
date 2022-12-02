import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CityFilterPipe } from './city/city.filter.pipe';
import { SearchCityComponent } from './city/search.city.component';
import { PlantFilterPipe } from './plant/plant.filter.pipe';
import { SearchPlantComponent } from './plant/search.plant.component';
import { SandboxHomeComponent } from './sandbox.home.component';
import { SandboxDataService } from './services/sandbox.data.service';
import { UsStateService } from './us-state/us.state.city.service';
import { SearchStateComponent } from './us-state/search.state.component';
import { UsStateComponent } from './us-state/us.state.component';
import { NbaPlayerComponent } from './nba-player/nba.player.component';
import { NbaService } from './nba-player/nba.service';
import { SwapiComponent } from './swapi/swapi.component';
import { SwapiService } from './swapi/swapi.service';
import { OptionItemService } from './option-item/option.item.service';
import { OptionItemComponent } from './option-item/option.item.component';
import { FaTestComponent } from './fa-test/fa.test.component';
import { FormValidationComponent } from './form-validation/form.validaton.component';
import { CustomerSearchComponent } from './customer-seach/customer-search.component';

const routes: Routes = [
  { path: 'sandbox/home', component: SandboxHomeComponent },
  { path: 'sandbox/us-state', component: UsStateComponent },
  { path: 'sandbox/search-city', component: SearchCityComponent },
  { path: 'sandbox/search-plant', component: SearchPlantComponent },
  { path: 'sandbox/search-state', component: SearchStateComponent },
  { path: 'sandbox/nba-player', component: NbaPlayerComponent },
  { path: 'sandbox/swapi', component: SwapiComponent },
  { path: 'sandbox/option-item', component: OptionItemComponent },
  { path: 'sandbox/fa-test', component: FaTestComponent },
  { path: 'sandbox/form-validation', component: FormValidationComponent },
  { path: 'sandbox/customer-search', component: CustomerSearchComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [
    SandboxHomeComponent,
    SearchCityComponent,
    SearchPlantComponent,
    SearchStateComponent,
    UsStateComponent,
    NbaPlayerComponent,
    SwapiComponent,
    OptionItemComponent,
    FaTestComponent,
    FormValidationComponent,
    CustomerSearchComponent,
    CityFilterPipe,
    PlantFilterPipe,
  ],
  providers: [
    // SandboxDataService,
    // UsStateService,
    // NbaService,
    // SwapiService,
    // OptionItemService
  ],
})
export class SandboxModule {}
