/**
 * Created by gwuli on 02.08.2016.
 */
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient";
import {Http, Headers, Response} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class ShoppingListService {

    listOfItems: Observable<Ingredient> = null;
    updateTrigger: Subject<boolean> = new Subject<boolean>();

    constructor(private http: Http) { }

    getAllItem(): Observable<Ingredient[]> {
      return this.http.get("http://localhost:8081/td/ing/find_all").map(resp => resp.json());
    }

    getItem(id: number): Observable<Ingredient> {
      return this.http.get("http://localhost:8081/td/ing/one/" + id).map(resp => resp.json());

    }

    getIndexOfItem() {}

    insertItem(item: Ingredient): Observable<Response> {
      let headers = new Headers({
        "Content-Type": "application/json"
      });
     return this.http.post("http://localhost:8081/td/ing", JSON.stringify(item), {headers});

    }

    insertItems(items: Ingredient[]): Observable<Response> {
      let headers = new Headers({
        "Content-Type": "application/json"
      });
      return this.http.put("http://localhost:8081/td/ing", JSON.stringify(items), {headers});
    }

    delete(id: string): Observable<Response> {
      return this.http.delete("http://localhost:8081/td/ing/one/" + id);
    }


}
