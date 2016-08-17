/**
 * Created by gwuli on 02.08.2016.
 */
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient";
import {Http, Headers, Response} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";
import "rxjs/Rx";
import {basePath, reqOptions, reqOptionsJson} from "../shared/config.component";

@Injectable()
export class ShoppingListService {

    listOfItems: Observable<Ingredient> = null;
    updateTrigger: Subject<boolean> = new Subject<boolean>();

    constructor(private http: Http) { }

    getAllItem(): Observable<Ingredient[]> {
      return this.http.get(basePath + "ingredient/find_all", reqOptions).map(resp => resp.json());
    }

    getItem(id: number): Observable<Ingredient> {
      return this.http.get(basePath + "ingredient/one/" + id, reqOptions).map(resp => resp.json());

    }

    getIndexOfItem() {}

    insertItem(item: Ingredient): Observable<Response> {
      let headers = new Headers({
        "Content-Type": "application/json"
      });
     return this.http.post(basePath + "ingredient", JSON.stringify(item), reqOptionsJson);

    }

    insertItems(items: Ingredient[]): Observable<Response> {
      let headers = new Headers({
        "Content-Type": "application/json"
      });
      return this.http.put(basePath + "ingredient", JSON.stringify(items), reqOptionsJson);
    }

    delete(id: string): Observable<Response> {
      return this.http.delete(basePath + "ingredient/one/" + id, reqOptions);
    }


}
