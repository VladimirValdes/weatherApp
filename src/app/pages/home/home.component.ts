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
  // weekWe: List[] = [];

  cityW: WeatherbyCity;
  location: string = '';
  loading = true;
  convertD = false;
  active: boolean;
  currentHour = new Date();

  constructor(public sidebarService: SidebarService,
              public weatherService: WeatherService,
              public mapBoxService: MapBoxService) {
               }

  ngOnInit(): void {

    let date = new Date();


    console.log('La hora: ',date.getHours())
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
     
      this.newWeek( resp.list );
      // this.showDate(resp.list);

      // if (this.weekWeather.length > 0) {
      //    this.weekWeather = [];
      // }

   
      // this.weekWeather = this.selectDays( resp.list, 0);

      this.loading = false;

    })
  }

  getCurrentWeather( lat = 0, lon = 0 ){
      this.weatherService.getWeatherByCity( lat, lon).subscribe( resp => {
          this.cityW = resp;
          this.cityW.dt = this.cityW.dt * 1000;
      })
  }





  showDate( list: List[] ){
    list.forEach( ( el: List, index ) => {
       let date = new Date( el.dt );
       console.log( `Fecha ${ index }`,date)

    });
  }

  newWeek(list: List[]){

    if ( this.currentHour.getHours()  % 3 === 0) {
        this.weekWeather = list.filter( day => {
        day.dt = day.dt * 1000;
        let date = new Date( day.dt );
        return  date.getHours() === this.currentHour.getHours();
      });

      this.showDate(this.weekWeather);
    } else {
      this.currentHour.setTime( 2 * 60 * 60 * 1000 );
      console.log('Hours :v ', this.currentHour.getHours())
    }
  }

  

}
