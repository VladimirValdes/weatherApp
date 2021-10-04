import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  imageName: string = '';
  

  transform(img: string, id: number ): string {
    if (img === 'Rain') {
      switch (id) {
        case 500:
        case 501:
          this.imageName = 'Shower'
          break;
        case 502:
        case 503:
          this.imageName = 'LightRain'
          break;
        default:
          this.imageName = 'HeavyRain'
          break;
      }
    } else if ( img === 'Snow') {
      switch (id) {
        case 600:
        case 601:
          this.imageName = 'Snow'
          break;
        case 602:
          this.imageName = 'Hail'
          break;
        default:
          this.imageName = 'Sleet'
          break;
      }
    } else if ( img === 'Clouds'){
      switch (id) {
        case 800:
        case 801:
          this.imageName = 'LightCloud'
          break;
        default:
          this.imageName = 'HeavyCloud'
          break;
      }
  } else if ( img === 'Thunderstorm') {
    this.imageName = 'Thunderstorm'
  } else if ( img === 'Clear'){
    this.imageName = 'Clear'

  }

    return `/assets/images/${ this.imageName }.png`;
  }

}
