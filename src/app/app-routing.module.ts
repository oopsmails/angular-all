//app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCityComponent } from './sandbox/city/search.city.component';
import { SearchPlantComponent } from './sandbox/plant/search.plant.component';
import { SearchStateComponent } from './sandbox/us-state/search.state.component';
import { UsStateComponent } from './sandbox/us-state/us.state.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sandbox/us-state', component: UsStateComponent },
  { path: 'sandbox/search-city', component: SearchCityComponent },
  { path: 'sandbox/search-plant', component: SearchPlantComponent },
  { path: 'sandbox/search-state', component: SearchStateComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
