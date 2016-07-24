import {Component} from "@angular/core";
import {Component1} from "./component1.component";
import {Component2} from "./component2.component";



@Component({
  selector: 'app',
  template: ` 
 <h1>My first component</h1>
     <component1></component1>
     <br>
     <h1>Second component
     </h1>
     <component2></component2>
    `,
  directives : [Component1, Component2]
})
export class AppComponent {

}
