/**
 * Created by gwuli on 31.07.2016.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {SubComponent} from "./comp2-sub.component";
import {advanceActivatedRoute} from "@angular/router/src/router_state";

@Component({
    template: `Hello im component 1
<div>
Source was {{source}} <br>
Optional param = {{optionalParam}}
</div>

<hr>
<ul>   
    <li> <a [routerLink]="['']">MainRoute</a> </li>
    <li> <a [routerLink]="['subroute']">Subroute</a> </li>
  </ul>
<hr>
<router-outlet></router-outlet>


`,
  directives : [ROUTER_DIRECTIVES]
})
export class Component1Component implements OnInit {
  source:string;
  optionalParam:string;


    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
      //we can access it like this (from static array) without Observables, but it wont be updating if url will change
      // this.activatedRoute.snapshot.params
      // this.router.routerState.snapshot.queryParams
        this.activatedRoute.params.subscribe(params => {
          this.source = params['source'];
        });
      this.router.routerState.queryParams.subscribe(params => {
        this.optionalParam = params['optional'];
      });
    }

}
