import { Component } from '@angular/core';
import { Feature } from './interfaces/places.interface';
import { MapBoxService } from './services/map-box.service';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appnews';
  places: Feature[] = [];
 
  constructor( public sidebarService: SidebarService,
               private mapBoxService: MapBoxService) {
    
  }


  getPlaces( term: string ){

    console.log( term );
    this.mapBoxService.getPlace(term).subscribe( places => {
      this.places = places.features;
    })

  }


  getCoords( coordinates: number[], city: Feature) {

    this.mapBoxService.coords.emit( coordinates );
    this.sidebarService.showMenu();
    console.log(`CITY ${ city.text}`)
  }
}
