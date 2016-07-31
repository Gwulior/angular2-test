import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Component2Component} from "./component2.component";
import {Observable} from "rxjs/Rx";
/**
 * Created by gwuli on 01.08.2016.
 */
export class CanDeactivateGuard implements CanDeactivate<Component2Component> {
//Can deactivate handler
  canDeactivate(component:Component2Component, route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
    return confirm("Are you sure???");
  }
}
