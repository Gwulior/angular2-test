/**
 * Created by gwuli on 18.09.2016.
 */

import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./app.routes";
import {LoginComponent} from "./auth/login.component";
import {RecipeComponent} from "./receipe-book/recipe.component";
import {RecipeDetailComponent} from "./receipe-book/recipe-detail.component";
import {ImageGaleryComponent} from "./directives/galery.directive";
import {RecipesEditComponent} from "./receipe-book/recipe-edit.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeListComponent} from "./receipe-book/recipe-list.component";
import {ShoppingListEditComponent} from "./shopping-list/shopping-list-edit.component";
import {AuthActivateGuard} from "./auth/auth.activate.guard";
import {CanDeactivateGuard} from "./shared/router.guard";


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
  declarations: [AppComponent, LoginComponent, RecipeComponent, RecipeDetailComponent,
  ImageGaleryComponent, RecipesEditComponent, ShoppingListComponent, ShoppingListComponent,
    RecipeListComponent, ShoppingListEditComponent
  ],
  bootstrap: [AppComponent],
  providers : [AuthService, AuthActivateGuard, CanDeactivateGuard]
})
export class MyAppModule {
}
