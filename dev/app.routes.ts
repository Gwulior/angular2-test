/**
 * Created by gwuli on 31.07.2016.
 */
import {RouterConfig, provideRouter} from "@angular/router";
import {RecipeComponent} from "./receipe-book/recipe.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./receipe-book/recipe-detail.component";
import {RecipesEditComponent} from "./receipe-book/recipe-edit.component";
import {CanDeactivateGuard} from "./shared/router.guard";
import {LoginComponent} from "./shared/login.component";
import {AuthActivateGuard} from "./shared/auth.activate.guard";

export const routes: RouterConfig = [
  {
    path: "",
    // we need to pass parameter after slash, because out component-1, uses them, and they are required
    component : LoginComponent,
    pathMatch: "full"
  },
  {
    path: "recipes",
    component : RecipeComponent,
    canActivate : [AuthActivateGuard],
    children : [
      {path : "", component : RecipeDetailComponent},
      {
        path : "detail/:id",
        component : RecipeDetailComponent

      },
      {
        path : "edit/:id",
        component : RecipesEditComponent,
        canDeactivate : [CanDeactivateGuard]
      },
      {
        path : "edit",
        component : RecipesEditComponent,
        canDeactivate : [CanDeactivateGuard]
      }
      ]
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
// there we pass out DeactivateHandlerGuard for providing in routes it's absolutely the same as:
  //     provide(FlightEditGuard, {useClass: FlightEditGuard})
  CanDeactivateGuard, AuthActivateGuard,
  provideRouter(routes)
];
