import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {RecipesEditComponent} from "../receipe-book/recipe-edit.component";
/**
 * Created by gwuli on 08.08.2016.
 */
export class CanDeactivateGuard implements CanDeactivate<RecipesEditComponent> {
  canDeactivate(component: RecipesEditComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    if (!component.recipeForm.pristine) {
      console.log("returning okowko");
      return window.confirm("Are you shure?");
    }
    console.log("returning true");
    return true;
  }


}
