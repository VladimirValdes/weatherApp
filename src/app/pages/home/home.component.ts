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
  currentDate = new Date();

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

      this.validateHour();

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

  newWeek(list: List[]) {


    const weatherHour = this.validateHour();

    this.weekWeather = list.filter( day => {
        day.dt = day.dt * 1000;
        let date = new Date( day.dt );
        return  date.getHours() === weatherHour.getHours();
    });

    this.showDate(this.weekWeather);
  }

  validateHour( ): Date {

  const updateDate =  ( this.currentDate.getHours() % 3 > 0 ) ? 
      this.currentDate.setHours( this.currentDate.getHours() - this.currentDate.getHours() % 3 )
    : this.currentDate
    
    console.log(`current Hours ${ new Date( updateDate ).getHours()}`)
    return new Date( updateDate);
    
  }

  

}
