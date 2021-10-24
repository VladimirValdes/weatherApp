import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coord, List } from 'src/app/interfaces/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-card-day',
  templateUrl: './card-day.component.html',
  styleUrls: ['./card-day.component.scss']
})
export class CardDayComponent implements OnChanges {

  weekWeather: List[] = [];
  currentDate = new Date();
  @Input() coordinate: Coord = { 
    lon: 0,
    lat: 0
  };



  convertD = false;
  

  constructor( public weatherService: WeatherService,) { }
  


  ngOnChanges(changes: SimpleChanges): void {
    if ( changes.coordinate && changes.coordinate.currentValue ) {

      if ( this.coordinate.lat !== 0) {

        this.getWeekWeather( this.coordinate.lat, this.coordinate.lon);
        
      }
    }
  }


  getWeekWeather( lat = 0, lon = 0) {
    this.weatherService.getcurrentWeather( lat, lon).subscribe( resp => {
      this.currentWeatherPerDay( resp.list );
    })
  }


  currentWeatherPerDay(list: List[]) {

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

  showDate( list: List[] ){
    list.forEach( ( el: List, index ) => {
       let date = new Date( el.dt );
       console.log( `Fecha ${ index }`,date)

    });
  }

}
