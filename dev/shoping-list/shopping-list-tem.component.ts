import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item, ItemImpl} from "./model/models";
import {ShoppingListService} from "./shopping-list-service";
/**
 * Created by gwuli on 24.07.2016.
 */


@Component({
  selector: 'shopping-list-item',
  template: `
          <div class="input">
              <label for="item-name">Name</label>
              <input type="text" id="item-name" [(ngModel)]="item.name"/>
          </div>
          <div class="input">
              <label for="item-amt">Name</label>
              <input type="number" id="item-amt" [(ngModel)]="item.amount"/>
          </div>
          <button class="danger" (click)="onDelete()">Delete Item</button>
`
})
export class ShoppingListItemComponent {

  @Input()item:Item;
  @Output()removed = new EventEmitter<Item>();

  constructor(private shoppingListService: ShoppingListService){

  }

  onDelete() {
    this.shoppingListService.deleteItem(this.item);
    this.removed.emit(null);
  }
}
