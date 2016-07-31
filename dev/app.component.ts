import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";


@Component({
  selector: 'app',
  template: ` 
  <header>
  <ul>    
    <li> <a [routerLink]="['component-1', 'lalala']"  [queryParams]="{optional : 'optional2'}">Component1</a> </li>
    <!--<li> <a [routerLink]="['component-1']">Component1</a> </li>-->
    <li> <a [routerLink]="['component-2']">Component2</a> </li>
  </ul>
  </header>
    <p>Bellow are another components</p>
     <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]

})
export class AppComponent {

}
