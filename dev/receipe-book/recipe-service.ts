/**
 * Created by gwuli on 03.08.2016.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";
import {Recipe} from "../shared/recipe";

@Injectable()
export class RecipeService{

    constructor(private http:Http) { }
    updateTrigger:Subject<boolean> = new Subject<boolean>();

    saveRecipe(recipe: Recipe): Observable<Recipe> {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
        return this.http.put("http://localhost:8081/td/recipe",
          JSON.stringify(recipe),
          {headers})
          .map(res => res.json());
    }

    getAllRecipes(): Observable<Recipe[]> {
      return this.http.get("http://localhost:8081/td/recipe/find_all")
        .map(res => {
          console.log(res);
          return res.json();
    })
    }

    getRecipe(id: string):Observable<Recipe> {
      return this.http.get("http://localhost:8081/td/recipe/one/"+id).map(res=>res.json());
    }

    deleteRecipe(id: string) {
      return this.http.delete("http://localhost:8081/td/recipe/one/"+id);
    }

}
