
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    map,
    Observable
} from 'rxjs';
import { UsCity, UsState } from '../models/us.state.city.model';

@Injectable({
    providedIn: 'root',
})
export class UsStateService {
    constructor(private httpClient: HttpClient) { }

    getUsStateCity(): Observable<UsState[]> {
        let statesData: [string, any][];
        let states: UsState[] = [];
        return this.httpClient.get('assets/mockdata/cities.json').pipe(
            map(
                data => {
                    console.log('Loading states and cities ..... ', data);
                    if (data) {
                        statesData = Object.entries(data).sort();

                        let sIdx = 0;
                        statesData.forEach((stateData) => {
                            // console.log(`stateData[0]: `, stateData[0]);
                            // console.log(`stateData[1]: `, stateData[1]);
                            const state = this.makeUsState(sIdx, stateData[0]);
                            sIdx++;

                            let cIdx = 0;
                            stateData[1].sort().forEach(cityData => {
                                const city = this.makeUsCityWithStateName(cIdx, cityData, state.stateName);
                                cIdx++;
                                state.cities.push(city);
                            });
                            states.push(state);
                        });
                    }
                    console.log(`states: `, states);
                    return states;
                }
            )
        );
    }

    getUsCities() {
        let cities: UsCity[] = [];
        let retCities: UsCity[] = [];
        return this.getUsStateCity().pipe(
            map(
                states => {
                    // console.log(`states: `, states);
                    states.forEach(
                        (state) => {
                            state.cities.forEach(
                                cityData => {
                                    // console.log(`cityData: `, cityData);
                                    const newCity = this.makeUsCityWithStateName(0, cityData.cityName, cityData.inStateName);
                                    cities.push(cityData);
                                }
                            )
                        }
                    )

                    cities.sort((a, b) => a.cityName.localeCompare(b.cityName));
                    let cIdx = 0;
                    cities.forEach(
                        (city) => {
                            const newCity = this.makeUsCityWithStateName(cIdx, city.cityName, city.inStateName);
                            cIdx++;
                            retCities.push(newCity);
                        }
                    );
                    console.log(`Num of cities: `, retCities.length);
                    return retCities;
                }
            )
        );
    }

    makeUsState(idx: number, stateName: string): UsState {
        const state: UsState = {} as UsState;
        state.id = idx;
        state.stateName = stateName;
        state.cities = [];

        return state;
    }

    makeUsCity(idx: number, cityName: string): UsCity {
        const city: UsCity = {} as UsCity;
        city.id = idx;
        city.cityName = cityName;

        return city;
    }

    makeUsCityWithStateName(idx: number, cityName: string, stateName: string): UsCity {
        const city: UsCity = this.makeUsCity(idx, cityName);
        city.inStateName = stateName;
        return city;
    }

}