import {Injectable} from "@angular/core";
import {Item} from "./model/models";
import {shopping_list} from "./mock-shopping-list";
/**
 * Created by gwuli on 24.07.2016.
 */

@Injectable()
export class ShoppingListService {

  getItems() {
    return shopping_list;
  }

  insertItem(item: Item) {
    shopping_list.push(item);
  }

  deleteItem(item: Item) {
    shopping_list.splice(shopping_list.indexOf(item), 1);
  }
}
