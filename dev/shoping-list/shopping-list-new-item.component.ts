import {Component, Output, EventEmitter} from "@angular/core";
import {Item, ItemImpl} from "./model/models";

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

  item:Item = new ItemImpl('', 0);

  @Output() itemAdd:EventEmitter<Item> = new EventEmitter<Item>();

  onClick():void {
    this.itemAdd.emit(this.item);
    this.item = new ItemImpl();
  }

}
