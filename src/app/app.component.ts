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
 
  constructor() {
    
  }



}
