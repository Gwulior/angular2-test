import {Component} from "@angular/core";



@Component({
  selector: 'app',
  template: ` 
     <section>
     <h2>The Date Pipe</h2>
       <p>Today is : {{today | date:'short'}}</p>
    </section>
     <section>
     <h2> The lowercase and UPPERCASE Pipe</h2>
       <input type="text" #inputCasePipes (keyup)="0"><br>
       <div>Output Lowercase: {{inputCasePipes.value | lowercase}}</div>
       <div>Output Uppercase: {{inputCasePipes.value | uppercase}}</div>
     </section>
     
     <section>
     <h2> The Slice Pipe</h2>
       <input type="text" #inputSlicePipes (keyup)="0"> - 
       from  <input type="text" #start (keyup)="0"> to 
       <input type="text" #end (keyup)="0">
       <div>Output : {{inputSlicePipes.value | slice:start.value:end.value}}</div>
     </section>
     
     <section>
     <h2>Number Pipes</h2>
       <input type="text" #inputNumberPipes (keyup)="0"> 
       - currency <input type="text" #currency value="EUR" (change)="0"> <br>
       <div>Decimal: {{1.0 * inputNumberPipes.value | number:'2.2-2'}}</div>
       <div>Currency: {{1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2-2'}}</div>
       <input type="checkbox" #currencyShort checked (change)="0"> Short Currency code
     </section>
     
     <section>
     <h2>Chaining multiple Pipes (e.g. uppercase and slice)</h2>
       <input type="text" #inputChainPipes (keyup)="0"/><br>
       <div>Output: {{inputChainPipes.value | slice:1-3 | uppercase}}</div>
     </section>
     
     <!--<section>-->
     <!--<h2>Custom Pipe (reverse string)</h2>-->
       <!--<input type="text" #inputCustomPipe (keyup)="0"/<br>-->
       <!--<div>Output: XX</div>-->
     <!--</section>-->
     
     <section>
     <h2>Async (stateful) pipes</h2>
       <div>Output (received after 2s): XX</div>
     </section>
    `,
})
export class AppComponent {
  today:Date = new Date();
}
