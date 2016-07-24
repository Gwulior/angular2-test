import {Component} from "@angular/core";
import {ShoppingListComponent} from "./shoping-list/shoping-list.component";



@Component({
  selector: 'app',
  template: `
     <header>
     <div class="brand">Shopping List</div>
</header>
<div class="main">
<shoping-list></shoping-list>
</div>


    `,
  directives : [ShoppingListComponent]
})
export class AppComponent {

}
