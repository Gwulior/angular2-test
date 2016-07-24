import {Component} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";
/**
 * Created by gwuli on 23.07.2016.
 */

@Component({
  selector : "my-attribute-directives",
  template : `
  <div [myHighlight]="'red'">
    Highlight me 
  </div> 
  <br><br>
  <div [myHighlight]="'blue'">
    Highlight me 
  </div>  

`,
  directives : [HighlightDirective]
})

export class AttributeDirectiveComponent {

}
