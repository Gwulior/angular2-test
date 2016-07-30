import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})

export class ReversePipe implements PipeTransform {
    transform(value: any, args: any[]): any {
      console.log('i work');
        const length = value.length;
      let resultString = '';
      for (let i = 0; i < length; i++){
        resultString = value[i] + resultString;
      }
      return resultString;
    }
}
