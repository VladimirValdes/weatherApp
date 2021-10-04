export interface Weather {
    cod:     string;
    message: number;
    cnt:     number;
    list:    List[];
    city:    City;
}

export interface WeatherbyCity {
    coord:      Coord;
    weather:    WeatherElement[];
    base:       string;
    main:       MainClass;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        SysCity;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}


export interface City {
    id:         number;
    name:       string;
    coord:      Coord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}


export interface List {
    dt:         number;
    main:       MainClass;
    weather:    WeatherElement[];
    clouds:     Clouds;
    wind:       Wind;
    visibility: number;
    pop:        number;
    sys:        Sys;
    dt_txt:     string;
    rain?:      Rain;
}

export interface Clouds {
    all: number;
}

export interface MainClass {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf?:    number;

}

export interface Rain {
    "3h": number;
}

export interface Sys {
    pod: Pod;
}

export enum Pod {
    D = "d",
    N = "n",
}

export interface WeatherElement {
    id:          number;
    main:        MainEnum;
    description: Description;
    icon:        string;
}

export enum Description {
    BrokenClouds = "broken clouds",
    ClearSky = "clear sky",
    FewClouds = "few clouds",
    LightRain = "light rain",
    OvercastClouds = "overcast clouds",
    ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain",
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}

export interface Coord {
    lon: number;
    lat: number;
}


export interface SysCity {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}




