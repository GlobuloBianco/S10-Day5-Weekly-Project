import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiuscolo'
})
export class MaiuscoloPipe implements PipeTransform {

  transform(value: string, ...args: any[]) {
    let result = value.toUpperCase();
    return result;
  }

}
