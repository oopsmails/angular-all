import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ExampleDataService } from 'src/app/example/example.data.service';
import { EXAMPLE_BACK_TO_HOME, EXAMPLE_HOME_LINK } from 'src/app/example/example.constantes';
import { RandomItem } from 'src/app/shared/models';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles';

  // 20221112: Hacking below
  linkText = EXAMPLE_BACK_TO_HOME;
  routerLinkInput = EXAMPLE_HOME_LINK;
  items$: Observable<RandomItem[]>;

  constructor(private exampleDataService: ExampleDataService) {}

  ngOnInit() {
    this.items$ = this.exampleDataService.getOptionData().pipe(
      map((items: RandomItem[]) => {
        return items.slice(0, 2);
      })
    );
  }
}
