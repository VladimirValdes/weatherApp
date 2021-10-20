import { Component, Input, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/weather.interface';

@Component({
  selector: 'app-card-day',
  templateUrl: './card-day.component.html',
  styleUrls: ['./card-day.component.scss']
})
export class CardDayComponent implements OnInit {

  @Input() weekWeather: List[] = [];
  convertD = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
