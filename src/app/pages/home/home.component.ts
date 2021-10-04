import { Component, OnInit } from '@angular/core';
import { Weather, List, City, WeatherbyCity } from 'src/app/interfaces/weather.interface';
import { MapBoxService } from 'src/app/services/map-box.service';
import { SidebarService } from 'src/app/services/sidebar.service';
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
  location: string = '';
  loading = true;
  convertD = false;
  active: boolean;

  constructor(public sidebarService: SidebarService,
              public weatherService: WeatherService,
              public mapBoxService: MapBoxService) {
               }

  ngOnInit(): void {

      this.getGlobalWeather();
      this.mapBoxService.coords.subscribe( ([ long, lat ]: number[]) => {
        this.getCurrentWeather(lat, long );
        this.getWeekWeather(lat, long)
      })

  }

  getGlobalWeather() {
      this.loading = true;
    this.weatherService.getCoords().then( ( resp: any ) => {
      this.getWeekWeather( resp.latitude, resp.longitude);
      this.getCurrentWeather( resp.latitude, resp.longitude);
    });

  }


  getWeekWeather( lat = 0, lon = 0) {
    this.weatherService.getcurrentWeather( lat, lon).subscribe( resp => {
      
      this.location = resp.city.name;
     

      if (this.weekWeather.length > 0) {
         this.weekWeather = [];
      }

   
      this.weekWeather = this.selectDays( resp.list, 0);

      this.loading = false;

    })
  }

  getCurrentWeather( lat = 0, lon = 0 ){

      this.weatherService.getWeatherByCity( lat, lon).subscribe( resp => {
          this.cityW = resp;
          this.cityW.dt = this.cityW.dt * 1000;
      })
  }

  selectDays(list: List[], n: number, item = 1):  List[] {
    if ( n === 5) {
      return [];
    } else {
      const days = this.selectDays(list, n + 1, item + 8);
      list[item].dt = list[item].dt * 1000;
      days.unshift(list[item]);
      return days; 
    }

  }

  convertDegress(){
      this.convertD != this.convertD;
  }

  

}
