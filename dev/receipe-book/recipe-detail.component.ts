/**
 * Created by gwuli on 06.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder} from "@angular/forms";
import {Recipe} from "../shared/recipe";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "./recipe-service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Component({
  templateUrl: "templates/recipes/recipes-detail.tpl.html",
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private service: RecipeService,
              private shoppingListService: ShoppingListService) {
    console.log("im constructor RecipeDetail");
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"];
      if (id != null) {
        this.service.getRecipe(id).subscribe(
          res => {
            this.selectedRecipe = res;
            console.log("setted response");
            console.log("response = " + res);
          }
        )
      }
     });
  }


  onEdit(id: string) {
    this.router.navigate(["recipes/edit", id]);
  }

  onAddToShoppingList() {
    this.shoppingListService.insertItems(this.selectedRecipe.ingredients)
      .subscribe();
  }



  onDelete() {
    this.service.deleteRecipe(this.selectedRecipe.id).subscribe(

      resp => {
        console.log("before update after recipe delete");
        this.service.updateTrigger.next(true);
        this.selectedRecipe = null;
        console.log("after update after recipe delete");
      },
      error => {

      }
    )
  }

}
