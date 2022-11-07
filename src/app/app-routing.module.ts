//app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCityComponent } from './example/city/search.city.component';
import { SearchPlantComponent } from './example/plant/search.plant.component';
import { SearchStateComponent } from './example/us-state/search.state.component';
import { UsStateComponent } from './example/us-state/us.state.component';

const routes: Routes = [
  { path: '', component: SearchPlantComponent },
  { path: 'example/us-state', component: UsStateComponent },
  { path: 'example/search-city', component: SearchCityComponent },
  { path: 'example/search-plant', component: SearchPlantComponent },
  { path: 'example/search-state', component: SearchStateComponent },
  { path: '**', component: SearchPlantComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
