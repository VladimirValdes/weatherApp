import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDegress'
})
export class ConvertDegressPipe implements PipeTransform {
  
  transform(celcius: number, convert = false ):any  {
    let fh = 0;

    if ( convert ) {
      fh = (celcius * 1.8 ) + 32;
      return Math.round(fh)+ '°F';
    } else {
      return Math.round(celcius) + '°C';
    }
  }

}
