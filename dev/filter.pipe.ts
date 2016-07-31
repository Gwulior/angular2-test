/**
 * Created by gwuli on 30.07.2016.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "./shoping-list/model/models";

@Pipe({
  name: 'myFilter'
})

export class FilterPipe implements PipeTransform {
  transform(value:Item[], args:string[]):any {
    if(value.length === 0 || args.length === 0) {
      return value;
    }
    let resultArray: Item[] = [];

    for(let item of value) {
      console.log('i work');
      if(item.name.match('^.*' + args[0] + '.*$')){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
