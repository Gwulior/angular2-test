/**
 * Created by gwuli on 24.07.2016.
 */

import {Component} from "@angular/core";
import {Item} from "./model/models";
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ShoppingListItemComponent} from "./shopping-list-tem.component";
@Component({
  selector: 'shoping-list',
  template: `

                <section>
                <shopping-list-new-item (itemAdd)="onItemAdded($event)"></shopping-list-new-item>
                </section>
                <section>
                    <h3>My List</h3>
                    <div class="list">
                     <ul>
                      <li *ngFor="let item of listItems" (click)="onSelect(item)">{{item.name}}  ({{item.amount}}) </li>
                    </ul>
                    </div>
                </section>
                <section *ngIf="selectedItem != null">
                <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
                </section>

`,
  directives : [ShoppingListNewItemComponent, ShoppingListItemComponent]
})

export class ShoppingListComponent {
    listItems:Item[] = [];
  selectedItem:Item;

  onItemAdded (item:Item) {
    this.listItems.push(Object.assign({}, item));
  }

  onSelect(item:Item) {
    this.selectedItem = item;
  }

  onRemove(item:Item) {
    this.listItems.splice(this.listItems.indexOf(item), 1);
    this.selectedItem = null;
  }
}
