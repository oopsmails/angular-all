import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, switchMap, Observable, fromEvent } from 'rxjs';
import { UsState } from '../models/us.state.city.model';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-search-state',
    templateUrl: './search.state.component.html',
    styleUrls: ['./search.state.component.scss']
})
export class SearchStateComponent implements OnInit {
    @ViewChild('search', { static: true }) search!: ElementRef;

    allStates$: Observable<UsState[]>;
    states$: Observable<UsState[]>;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.allStates$ = this.dataService.mockHttpGetAllUsStates();

        this.states$ = fromEvent(this.search.nativeElement, 'input')
            .pipe(
                map((event: any) => event.target.value),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap((searchText: string) => {
                    return this.dataService.mockHttpGetAllUsStates().pipe(
                        map(
                            (items: UsState[]) => {
                                return items.filter(item => item.stateName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
                            }
                        )
                    );
                })
                // switchMap((searchText: string) => this.dataService.mockHttpGetAllUsStates(searchText))
            );

        // fromEvent(this.search.nativeElement, 'input')
        //     .pipe(
        //         map((event: any) => event.target.value),
        //         debounceTime(500),
        //         distinctUntilChanged(),
        //         switchMap((searchText: string) => this.dataService.mockHttpGetAllUsStates())
        //         // switchMap((searchText: string) => this.dataService.mockHttpGetAllUsStates(searchText))
        //     )
        //     .subscribe((res) => {
        //         this.states = res;
        //         console.log(res);
        //     });
    }
}
