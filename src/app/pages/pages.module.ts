import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    PipesModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
