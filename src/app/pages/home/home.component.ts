import { Component, OnInit } from '@angular/core';
import { Coord, List, WeatherbyCity } from 'src/app/interfaces/weather.interface';
import { MapBoxService } from 'src/app/services/map-box.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {

  weekWeather: List[] = [];


  cityW: WeatherbyCity;
  coordinate: Coord = {
    lon: 0,
    lat: 0
  };

  constructor( public weatherService: WeatherService,
               public mapBoxService: MapBoxService) {
               }

  ngOnInit(): void {

  this.getGlobalWeather();
      
  }

  getGlobalWeather() {
    this.weatherService.getCoords().then( ( resp: any ) => {

      const { latitude, longitude } = resp;

      this.coordinate = {
        lon: longitude,
        lat: latitude
      }
      this.getCurrentWeather( latitude, longitude);
    });

  }

  getCurrentWeather( lat = 0, lon = 0 ){
      this.weatherService.getWeatherByCity( lat, lon).subscribe( resp => {
          this.cityW = resp;
      })
  }

}
