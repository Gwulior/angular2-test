/**
 * Created by gwuli on 07.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from "@angular/forms";
import {Recipe} from "../shared/recipe";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "./recipe-service";
import {Http, RequestOptions, Headers} from "@angular/http";
import {basePath, baseImagePath} from "../shared/config.component";
import {ImageGaleryComponent} from "../directives/galery.directive";
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms/src/directives";

@Component({
  templateUrl: `templates/recipes/recipes-edit.tpl.html`,
  // directives: [REACTIVE_FORM_DIRECTIVES, ImageGaleryComponent]
})
export class RecipesEditComponent implements OnInit {

  recipeForm: FormGroup;
  isSubmitted: boolean;
  imagesIds: string[] = [];
  baseImagePath: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: RecipeService,
              private http: Http) {
    console.log("im rec edit constructor");
    this.initMyForm();
    this.isSubmitted = false;
    this.baseImagePath = baseImagePath;

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

  //for update we can recreate the form or update values as below
  // fillMyForm(recipe: Recipe) {
  //   this.recipeForm = this.formBuilder.group({
  //     id: [recipe.id],
  //     name: [recipe.name, Validators.required],
  //     content: [recipe.content, Validators.required],
  //     ingredients: this.formBuilder.array(this.initIngredients(recipe))
  //   })

  //as here shown)))
  fillMyForm(recipe: Recipe) {

    // this.recipeForm = this.formBuilder.group({
    //   id: [recipe.id],
    //   name: [recipe.name, Validators.required],
    //   content: [recipe.content, Validators.required],
    //   ingredients: this.formBuilder.array(this.initIngredients(recipe))
    // })
    (<FormControl>this.recipeForm.controls["id"]).setValue(recipe.id);
    (<FormControl>this.recipeForm.controls["name"]).setValue(recipe.name);
    (<FormControl>this.recipeForm.controls["content"]).setValue(recipe.content);
    (<FormArray>this.recipeForm.controls["ingredients"]).controls = this.initIngredients(recipe);
    this.imagesIds = recipe.imagesIds;

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
    let recipe: Recipe = this.recipeForm.value;
    recipe.imagesIds = this.imagesIds;

    //was needed for base 64
    // if (this.imageId != null) {
    //   recipe.imageId = this.image.split(",")[1];
    // }
    this.service.saveRecipe(recipe).subscribe(
      res => {
        this.service.updateTrigger.next(true);
        this.router.navigate(["recipes"]);
      }
    );

  }

  onFileChange(event: any) {
    let options = new RequestOptions({
      withCredentials: true,
      headers: new Headers({
        'Content-Type': 'application/octet-stream'
      })
    });
    for (let i = 0; i < event.target.files.length; i++) {
      this.http.put(basePath + "image", event.target.files[i], options).subscribe(
        resp => {
          console.log("Have just saved picture and response is == " + resp.text());
          this.imagesIds.push(resp.text());
        }
      );
    }

  }


  //old
  // onFileChange(event: any) {
  //   let options = new RequestOptions({
  //     withCredentials: true,
      //we can do not define headers, and browser will generate it by itself with boundary, prefer this way
      // headers: new Headers({
      //   'Content-Type': 'multipart/form-data; boundary=312uh132h'
      // })
    // });
    // var formData: FormData = new FormData();
    // formData.append("photo", event.target.files[0]);
    // this.http.put(basePath + "http://localhost:8081/td/recipe/image2", formData, options).subscribe();
    //
    //or read as base64 string
    // if (event.target.files[0] != null) {
    //   let fileReader: FileReader = new FileReader();
    //   fileReader.onloadend = (ev: ProgressEvent) => {
    //     this.image = fileReader.result;
    //   };
    //
    //   fileReader.readAsDataURL(event.target.files[0]);
    // }
  // }

  addMime(str: string): string {
    return "data:image/jpeg;base64," + str;
  }


}

