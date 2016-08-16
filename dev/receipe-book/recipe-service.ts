/**
 * Created by gwuli on 03.08.2016.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";
import {Recipe} from "../shared/recipe";
import {basePath} from "../shared/config.component";

@Injectable()
export class RecipeService {
  headers = new Headers({
    'Content-Type': 'application/json'
  });
  options = new RequestOptions({
    withCredentials: true,
    headers: this.headers
  });


  constructor(private http: Http) {
  }

  updateTrigger: Subject<boolean> = new Subject<boolean>();

  saveRecipe(recipe: Recipe): Observable<Recipe> {
    // let myOptions: RequestOptions = new RequestOptions({withCredentials : true, headers: this.headers });
  console.log("created options for saving recipe");
    return this.http.put(basePath + "recipe",
      JSON.stringify(recipe),
      this.options)
      .map(res => res.json());
  }

  getAllRecipes(): Observable<Recipe[]> {

    return this.http.get(basePath + "recipe/find_all", this.options)
      .map(res => {
        console.log(res);
        return res.json();
      })
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get(basePath + "recipe/one/" + id, this.options).map(res=>res.json());
  }

  deleteRecipe(id: string) {
    return this.http.delete(basePath + "recipe/one/" + id, this.options);
  }

}
