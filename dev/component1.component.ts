import {Component} from "@angular/core";
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.service";
/**
 * Created by gwuli on 24.07.2016.
 */

@Component({
  selector: 'component1',
  template: `<div>
  <h1>Logging service</h1>
  <input type="text" #message/>
  <button (click)="onLog(message.value)">Send</button>
</div>
<div>
  <h1>Calculator Service</h1>
  <p>Add or multiply these two number:</p>
  <input type="text" #num1/>
  <input type="text" #num2/>
  <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
  <button (click)="onAdd(num1.value, num2.value)">Add</button>
  <br>
  <p>Result: {{result}}</p>  
</div>
<div>
<h1>Data Service</h1>
<button (click)="onGetData()">Get some data</button>
<p>Data: {{data}}</p>
<input type="text" #newData/>
  <button (click)="onInsert(newData.value)">Insert new Data</button>
</div>
  `,
  providers: [LoggingService, CalculatorService]
})

export class Component1 {
  result:string;
  data:string;

  constructor(private _loggingService:LoggingService,
              private calculatorService:CalculatorService,
              private _dataService:DataService) {

  }

  onLog(message:string) {
    this._loggingService.log(message);
  }

  onMultiply(one:number, two:number) {
    this.result = '' + this.calculatorService.multiply(+one, +two);
  }

  onAdd(one:number, two:number) {
    this.result = "" + this.calculatorService.add(+one, +two);
  }

  onGetData() {
    this.data = this._dataService.getRandomString();
  }

  onInsert(value:string) {
    this._dataService.insert(value);
  }


}
