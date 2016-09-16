import {Component} from "@angular/core";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecipeService} from "./receipe-book/recipe-service";
import {RouterModule} from "@angular/router";


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
  // directives: [RouterModule],
  providers: [ShoppingListService, RecipeService]
})
export class AppComponent {

}
