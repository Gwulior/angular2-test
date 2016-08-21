/**
 * Created by gwuli on 06.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {RecipeService} from "./recipe-service";
import {Observable} from "rxjs";
import {Recipe} from "../shared/recipe";
import {Router} from "@angular/router";
import {baseImagePath} from "../shared/config.component";

@Component({
  selector: "my-recipe-list",
  template: `<button class="btn" (click)="onAddRecipes()">Add Recipe</button>

<table>
<tr *ngFor="let item of recipes | async" (click)="onSelect(item)">
<td><img class="img" [src]="baseImagePath + item.imagesIds[0]" alt="Recipe"> </td>
<td>{{item.name}}</td>
</tr>
</table>

`
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;
  baseImagePath: string;

  constructor(private service: RecipeService,
              private router: Router) {
    service.updateTrigger.subscribe(
      trig => this.updateList()
    );
    this.baseImagePath = baseImagePath;
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.recipes = this.service.getAllRecipes();
  }

  onSelect(item: Recipe) {
    this.router.navigate([`recipes/detail`, item.id]);
  }

  onAddRecipes() {
    this.router.navigate([`recipes/edit`]);
  }

}
