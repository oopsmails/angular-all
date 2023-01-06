import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CityFilterPipe } from './city/city.filter.pipe';
import { SearchCityComponent } from './city/search.city.component';
import { CustomerSearchComponent } from './customer-seach/customer-search.component';
import { FaTestComponent } from './fa-test/fa.test.component';
import { FormValidationComponent } from './form-validation/form.validaton.component';
import { FormValidationContentComponent } from './form-validation/form.validaton.content.component';
import { NbaPlayerComponent } from './nba-player/nba.player.component';
import { NgxbTypeaheadPreviewComponent } from './ngxb/ngxb-typeahead-preview/ngxb.typeahead.preview';
import { OptionItemComponent } from './option-item/option.item.component';
import { PlantFilterPipe } from './plant/plant.filter.pipe';
import { SearchPlantComponent } from './plant/search.plant.component';
import { SandboxHomeComponent } from './sandbox.home.component';
import { SwapiComponent } from './swapi/swapi.component';
import { SearchStateComponent } from './us-state/search.state.component';
import { UsStateComponent } from './us-state/us.state.component';

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
  { path: 'sandbox/ngxb-typeahead-preview', component: NgxbTypeaheadPreviewComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
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
    FormValidationContentComponent,
    CustomerSearchComponent,
    CityFilterPipe,
    PlantFilterPipe,
    NgxbTypeaheadPreviewComponent,
  ],
  providers: [],
})
export class SandboxModule {}
