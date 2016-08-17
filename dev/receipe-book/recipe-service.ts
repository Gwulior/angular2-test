/**
 * Created by gwuli on 03.08.2016.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";
import {Recipe} from "../shared/recipe";
import {basePath, reqOptions, reqOptionsJson} from "../shared/config.component";

@Injectable()
export class RecipeService {


  constructor(private http: Http) {
  }

  updateTrigger: Subject<boolean> = new Subject<boolean>();

  saveRecipe(recipe: Recipe): Observable<Recipe> {
    // let myOptions: RequestOptions = new RequestOptions({withCredentials : true, headers: this.headers });
  console.log("created options for saving recipe");
    return this.http.put(basePath + "recipe",
      JSON.stringify(recipe),
      reqOptionsJson)
      .map(res => res.json());
  }

  getAllRecipes(): Observable<Recipe[]> {

    return this.http.get(basePath + "recipe/find_all", reqOptions)
      .map(res => {
        console.log(res);
        return res.json();
      })
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get(basePath + "recipe/one/" + id, reqOptions).map(res=>res.json());
  }

  deleteRecipe(id: string) {
    return this.http.delete(basePath + "recipe/one/" + id, reqOptions);
  }

}
