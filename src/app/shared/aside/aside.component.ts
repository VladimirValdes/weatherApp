import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/interfaces/places.interface';
import { MapBoxService } from 'src/app/services/map-box.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './aside.component.html',
  styleUrls: [
    './aside.component.scss'
  ]
})
export class AsideComponent implements OnInit {

  places: Feature[] = [];

  constructor(public sidebarService: SidebarService,
              private mapBoxService: MapBoxService) { }

  ngOnInit(): void {
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
