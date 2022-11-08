import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { CityFilterPipe } from "./city/city.filter.pipe";
import { SearchCityComponent } from "./city/search.city.component";
import { PlantFilterPipe } from "./plant/plant.filter.pipe";
import { SearchPlantComponent } from "./plant/search.plant.component";
import { SandboxDataService } from "./services/sandbox.data.service";
import { UsStateService } from "./services/us.state.city.service";
import { SearchStateComponent } from "./us-state/search.state.component";
import { UsStateComponent } from "./us-state/us.state.component";

const routes: Routes = [
    { path: 'sandbox/us-state', component: UsStateComponent },
    { path: 'sandbox/search-city', component: SearchCityComponent },
    { path: 'sandbox/search-plant', component: SearchPlantComponent },
    { path: 'sandbox/search-state', component: SearchStateComponent },
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
        SearchCityComponent,
        SearchPlantComponent,
        SearchStateComponent,
        UsStateComponent,
        CityFilterPipe,
        PlantFilterPipe
    ],
    providers: [
        SandboxDataService,
        UsStateService
    ]
})
export class SandboxModule { }
