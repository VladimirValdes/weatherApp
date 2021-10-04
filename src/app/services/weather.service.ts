import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, WeatherbyCity } from '../interfaces/weather.interface';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'c7998bffc62899245cec35c4af7eef51';

  baseUrl = 'https://api.openweathermap.org/data/2.5'
  lat = 0;
  lon = 0;
  loading = false;

  public weather: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private http: HttpClient) { }



  getWeatherByCity( lat = 0, lon = 0): Observable<WeatherbyCity>{
    return this.http.get<WeatherbyCity>(`${ this.baseUrl }/weather?lat=${ lat }&lon=${ lon }&units=metric&appid=${ this.apiKey }`);

  }
  getcurrentWeather( lat = 0, lon = 0 ): Observable<Weather> {
    return this.http.get<Weather>(`${ this.baseUrl }/forecast?lat=${ lat }&lon=${ lon }&units=metric&appid=${ this.apiKey }`);
                  
  }

  getLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition( location => {
      this.lat = location.coords.latitude;
      this.lon = location.coords.longitude;
      this.loading = true;
      this.weather.emit( true );
      console.log( this.lat, this.lon)

    }, err => console.log(err), options );
  }

  getCoords() {
    return new Promise((resolve, reject) =>
    navigator.permissions ?

      // Permission API is implemented
      navigator.permissions.query({
        name: 'geolocation'
      }).then(permission =>
        // is geolocation promt?
        permission.state === "prompt"
          ? navigator.geolocation.getCurrentPosition(pos => resolve(pos.coords)) 
          : resolve(null)
      ) :

    // Permission API was not implemented
    reject(new Error("Permission API is not supported"))
  )
  }

  
}
