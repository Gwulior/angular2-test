import {Injectable} from "@angular/core";
/**
 * Created by gwuli on 24.07.2016.
 */

@Injectable()
export class CalculatorService {

  add(one:number, two:number){
    return one + two;
  }

  multiply(one:number, two:number){
    return one * two;
  }
}
