/**
 * Created by gwuli on 07.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES, FormArray} from "@angular/forms";
import {Recipe} from "../shared/recipe";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "./recipe-service";

@Component({
  templateUrl: `templates/recipes/recipes-edit.tpl.html`,
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RecipesEditComponent implements OnInit {

  recipeForm: FormGroup;
  isSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: RecipeService) {
    console.log("im rec edit constructor");
    this.initMyForm();
    this.isSubmitted = false;

  }

  initMyForm() {
    this.recipeForm = this.formBuilder.group({
      id: [],
      name: [``, Validators.required],
      content: [``, Validators.required],
      ingredients: new FormArray([])
    })
  }

  ngOnInit() {
    this.refillFormm();
  }

  refillFormm() {
    this.activatedRoute.params.subscribe(params => {
      if (params[`id`] != null) {
        this.service.getRecipe(params[`id`]).subscribe(
          res => {
            this.fillMyForm(res);
            console.log("response = " + res);
          }
        )
      }
    });
  }

  fillMyForm(recipe: Recipe) {
    this.recipeForm = this.formBuilder.group({
      id: [recipe.id],
      name: [recipe.name, Validators.required],
      content: [recipe.content, Validators.required],
      ingredients: this.formBuilder.array(this.initIngredients(recipe))
    })

  }

  initIngredients(recipe: Recipe) {
    if (recipe != null) {
      let ingredientsFormGroupsArray: FormGroup[] = [];
      for (let ing of recipe.ingredients) {
        ingredientsFormGroupsArray.push(this.formBuilder.group({
          name: [ing.name],
          amount: [ing.amount]
        }))
      }
      return ingredientsFormGroupsArray;
    }
  }

  onAddIngredient() {
    // Dynamic adding another form for ingredient
    let formControl: FormArray = <FormArray>this.recipeForm.controls[`ingredients`];
    formControl.push(this.formBuilder.group({
      name: [``],
      amount: [``]
    }));
  }

  onDeleteIngredient(index: number) {
    let formControl = <FormArray>this.recipeForm.controls[`ingredients`];
    formControl.removeAt(index);
  }


  onCancel() {
    console.log("im trying to navigate back to detail id = " + this.recipeForm.value.id);
    if (this.recipeForm.value.id == null) {
      this.router.navigate([`recipes`]);
    } else {
      this.router.navigate([`recipes/detail`, this.recipeForm.value.id]);
    }
  }

  onSave() {
    console.log("Form was = " + this.isSubmitted);
    this.isSubmitted = true;
    this.service.saveRecipe(this.recipeForm.value).subscribe(
      res => {
        this.service.updateTrigger.next(true);
        this.router.navigate(["recipes"]);
      }
    );

  }


}
