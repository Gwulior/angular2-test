/**
 * Created by gwuli on 31.07.2016.
 */
import {Component2Component} from "./component2.component";
import {RouterConfig, provideRouter} from "@angular/router";
import {Component1Component} from "./component1.component";
import {SubComponent} from "./comp2-sub.component";
import {MainComponent} from "./comp1-main.component";
import {CanDeactivateGuard} from "./can-deactivate.guard";

export const routes:RouterConfig = [
  {
    path: '',
    //we need to pass parameter after slash, because out component-1, uses them, and they are required
    redirectTo: '/component-1/start',
    pathMatch: 'full'
  },
  {
    path: "component-1/:source",
    component: Component1Component,
    //if we define a children element, we cant user parent path as standalone, now it works in along with children paths,
    // and if we want to process root parent path, we should provide children with empty path for that purpose

    children: [
      { path: '',  component: MainComponent },
      { path: 'subroute',  component: SubComponent }
    ]
  },
  {
    path: "component-2",
    component: Component2Component,
    canDeactivate : [CanDeactivateGuard]
  }
];

export const APP_ROUTER_PROVIDERS = [
  //there we pass out DeactivateHandlerGuard for providing in routes it's absolutely the same as:
  //     provide(FlightEditGuard, {useClass: FlightEditGuard})
  CanDeactivateGuard,
  provideRouter(routes)
];
