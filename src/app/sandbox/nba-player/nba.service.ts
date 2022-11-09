import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

@Injectable()
export class NbaService {
    private _playersData$ = new BehaviorSubject<void>(undefined);
    private api = 'https://www.balldontlie.io/api/v1/'; // https://www.balldontlie.io/api/v1/players
    private teamUrl = this.api + 'players';

    public apiRequest$ = this.http.get<any[]>(this.teamUrl).pipe(
        map((value: any) => {
            return value?.data.map((player) => ({
                ...player,
                fullName: `${player.first_name} ${player.last_name}`,
                processed: new Date().toISOString(),
            }));
        })
    );

    public players$ = this._playersData$.pipe(
        switchMap(() => this.apiRequest$),
        shareReplay(1)
    );

    constructor(private http: HttpClient) { }

    public updateData() {
        this._playersData$.next();
    }
}
