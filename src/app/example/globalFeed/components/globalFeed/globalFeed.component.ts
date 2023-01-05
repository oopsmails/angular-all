import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/app/shared/models/sample.model';
import { ExampleDataService } from 'src/app/example/example.data.service';
import { EXAMPLE_BACK_TO_HOME, EXAMPLE_HOME_LINK } from 'src/app/example/example.constantes';

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
    items$: Observable<OptionItem[]>;

    constructor(private exampleDataService: ExampleDataService) {}

    ngOnInit() {
        this.items$ = this.exampleDataService.getOptionData().pipe(
            map((items: OptionItem[]) => {
                return items.slice(0, 2);
            })
        );
    }
}
