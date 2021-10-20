import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertDegressPipe } from './convert-degress.pipe';
import { ImagePipe } from './image.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    ConvertDegressPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePipe,
    ConvertDegressPipe
  ]
})
export class PipesModule { }
