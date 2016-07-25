import {Component, Output, EventEmitter} from "@angular/core";
import {Item, ItemImpl} from "./model/models";
import {ShoppingListService} from "./shopping-list-service";

/**
 * Created by gwuli on 24.07.2016.
 */

@Component({
  selector: 'shopping-list-new-item',
  template: `
          
          <div class="input">
              <label for="item-name">Name</label>
              <input type="text" id="item-name" [(ngModel)]="item.name"/>
          </div>
          <div class="input">
              <label for="item-amt">Name</label>
              <input type="number" id="item-amt" [(ngModel)]="item.amount"/>
          </div>
          <button (click)="onClick()">Add Item</button>

        `
})

export class ShoppingListNewItemComponent {

  constructor(private shoppingListService:ShoppingListService) {

  }

  item:Item = new ItemImpl('', 0);

  onClick():void {
   this.shoppingListService.insertItem(Object.assign({}, this.item));
  }

}
