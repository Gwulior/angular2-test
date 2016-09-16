/**
 * Created by gwuli on 03.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {RecipeService} from "./recipe-service";
import {RecipeListComponent} from "./recipe-list.component";


@Component({
    selector: 'my-recipes',
    template: `
        <div class="master list">
        <div class="row" style="border: 1px; margin-top: 20px">
<div class="grid-6">
          <my-recipe-list></my-recipe-list>
        </div>
        
        <div class="grid-6">
        <router-outlet></router-outlet>
        </div>
        </div>
        </div>
`,
  providers : [RecipeService],
  // directives : [RecipeListComponent, ROUTER_DIRECTIVES]

})
export class RecipeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
