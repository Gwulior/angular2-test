/**
 * Created by gwuli on 06.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {RecipeService} from "./recipe-service";
import {Observable} from "rxjs";
import {Recipe} from "../shared/recipe";
import {Router} from "@angular/router";

@Component({
    selector: 'my-recipe-list',
    template: `<button class="btn" (click)="onAddRecipes()">Add Recipe</button>

<table>
<tr *ngFor="let item of recipes | async" (click)="onSelect(item)">
<td><img class="img" [src]="'data:image/png;base64,'+item.image" alt="Recipe"> </td>
<td>{{item.name}}</td>
</tr>
</table>

`
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

    constructor(private service: RecipeService,
                private router:Router) {
      service.updateTrigger.subscribe(
        trig => this.updateList()
      )
    }

    ngOnInit( ) {
      this.updateList();
    }

    updateList(){
      this.recipes = this.service.getAllRecipes();
    }

    onSelect(item: Recipe) {
      this.router.navigate(['recipes/detail', item.id]);
    }

}
