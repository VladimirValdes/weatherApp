import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Coord, WeatherbyCity } from 'src/app/interfaces/weather.interface';
import { MapBoxService } from 'src/app/services/map-box.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, OnChanges {

  cityW: WeatherbyCity ;

  @Input() coordinate: Coord = { 
    lon: 0,
    lat: 0
  };
  
  @Input() convertD: boolean = false;

  @Output() coordinates = new EventEmitter<Coord>();




  constructor(public sidebarService: SidebarService,
    public weatherService: WeatherService,
    public mapBoxService: MapBoxService) { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
      if ( changes.coordinate && changes.coordinate.currentValue ) {

        if ( this.coordinate.lat !== 0) {
            console.log(this.coordinate)
          this.getCurrentWeather( this.coordinate.lat, this.coordinate.lon);
          
        }
      } else if( changes.convertD && changes.convertD.currentValue ) {
          this.convertD = changes.convertD.currentValue;
        }
    }


    getGlobalWeather() {
        this.weatherService.getCoords().then( ( resp: any ) => {

        const { latitude, longitude } = resp;

        this.coordinate = {
          lon: longitude,
          lat: latitude
        }

        this.coordinates.emit(this.coordinate);
        
      });
    }

  
  getCurrentWeather( lat = 0, lon = 0 ){
    this.weatherService.getWeatherByCity( lat, lon).subscribe( resp => {
        this.cityW = resp;
        this.cityW.dt = this.cityW.dt * 1000;
    })
  }

}
