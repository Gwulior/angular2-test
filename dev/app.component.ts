import {Component} from "@angular/core";
import {AttributeDirectiveComponent} from "./attribute-directives.component";
import {StructuralDirectiveComponent} from "./structural.directive";



@Component({
  selector: 'app',
  template: `
     <my-attribute-directives></my-attribute-directives>
    <br>
     <h1>My structural directive</h1>
     <my-structural-directives></my-structural-directives>
    
    `,
  directives : [AttributeDirectiveComponent, StructuralDirectiveComponent]
})
export class AppComponent {

}
