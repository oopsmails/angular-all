import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';

const routes = [
  {
    path: 'example/globalfeed',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, CoreModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
