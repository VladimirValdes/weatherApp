import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDayComponent } from './card-day/card-day.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    CardDayComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class ComponentsModule { }
