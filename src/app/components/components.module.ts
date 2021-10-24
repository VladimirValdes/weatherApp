import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDayComponent } from './card-day/card-day.component';
import { PipesModule } from '../pipes/pipes.module';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';



@NgModule({
  declarations: [
    CardDayComponent,
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    CardDayComponent,
    CurrentWeatherComponent
  ]
})
export class ComponentsModule { }
