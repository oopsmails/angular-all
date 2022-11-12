import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
import { CoreModule } from 'src/app/core/core.module';

const routes = [
    {
        path: 'example/globalfeed',
        component: GlobalFeedComponent,
    },
];

@NgModule({
    imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
    declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
