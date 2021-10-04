import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from '../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class MapBoxService {
  apiKey = 'pk.eyJ1IjoidmxhZGltaXJoIiwiYSI6ImNrbTB1aG5ieDB3azQycG1ycmFxYW9iaG8ifQ._-3KlrFV0YHTlkp1LoCuLA';
  baseUrl = ' https://api.mapbox.com/geocoding/v5/mapbox.places';

  public coords: EventEmitter<number[]> = new EventEmitter<number[]>();

  
  constructor(private http: HttpClient) { }

  getPlace( term: string ): Observable<Places> {
    return this.http.get< Places >(`${ this.baseUrl }/${ term }.json?access_token=${this.apiKey}`)
  }

  
}
