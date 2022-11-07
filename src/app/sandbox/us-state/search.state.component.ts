import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith, switchMap } from 'rxjs';
import { UsState } from '../models/us.state.city.model';
import { SandboxDataService } from '../services/sandbox.data.service';
import { UsStateService } from '../services/us.state.city.service';

@Component({
    selector: 'app-search-state',
    templateUrl: './search.state.component.html',
    styleUrls: ['./search.state.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStateComponent implements OnInit {
    @ViewChild('search', { static: true }) search!: ElementRef;

    allStatesDelay$: Observable<UsState[]>;
    allStates$: Observable<UsState[]>;
    states$: Observable<UsState[]>;

    constructor(private usStateService: UsStateService, private sandboxDataService: SandboxDataService) {
    }

    ngOnInit() {
        // this is only for demoing mock delay in sandboxDataService
        this.allStatesDelay$ = this.sandboxDataService.mockHttpGetAllUsStates();
        // this.allStates$ = this.usStateService.getUsStateCity();

        // switchMap fromEvent first then get data
        this.states$ = fromEvent(this.search.nativeElement, 'input')
            .pipe(
                startWith({ target: this.search.nativeElement }),
                map((event: any) => event.target.value),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap((searchText: string) => {
                    console.log('searchText ..... = ', searchText);
                    if (searchText && searchText.trim().length >= 2) {
                        return this.usStateService.getUsStateCity().pipe(
                            // return this.allStates$.pipe(
                            map(
                                (items: UsState[]) => {
                                    return items.filter(item => item.stateName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
                                }
                            )
                        );
                    } else {
                        return this.usStateService.getUsStateCity();
                        // return this.allStates$;
                    }
                })
            );


        // get data first then switchMap fromEvent, working but is this proper??
        // this.states$ = this.usStateService.getUsStateCity()
        //     .pipe(
        //         switchMap((items: UsState[]) => {
        //             return fromEvent(this.search.nativeElement, 'input')
        //                     .pipe(
        //                         startWith({ target: this.search.nativeElement }),
        //                         map((event: any) => event.target.value),
        //                         debounceTime(500),
        //                         distinctUntilChanged(),
        //                         map(
        //                             (searchText: string) => {
        //                                 console.log('searchText ..... = ', searchText);
        //                                 if (searchText && searchText.trim().length >= 2) {
        //                                     return items.filter(item => item.stateName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
        //                                 } else {
        //                                     return items;
        //                                 }
        //                             }
        //                         )
        //                     )
        //         })
        //     );
    }
}
