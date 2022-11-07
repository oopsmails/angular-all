export interface UsState {
    id: number;
    stateName: string;
    cities?: UsCity[]
}

export interface UsCity {
    id: number;
    cityName: string;
    inStateName?: string;
}

