import {Component} from "@angular/core";
import {ShoppingListService} from "./shared/shopping-list.service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {RecipeService} from "./receipe-book/recipe-service";


@Component({
  selector: `app`,
  template: ` 
     <header>
 <div class="row row--align-center">
 <div class="grid">     
     <nav><ul>
     <li class="active"><a [routerLink]="['recipes']">Recipes</a></li>
     <li><a [routerLink]="['shopping-list']">Shopping List</a></li>
</ul></nav>

</div>

</div>
</header>

<router-outlet></router-outlet>

    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ShoppingListService, RecipeService]
})
export class AppComponent {

}
