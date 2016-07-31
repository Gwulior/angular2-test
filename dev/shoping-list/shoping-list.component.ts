/**
 * Created by gwuli on 24.07.2016.
 */

import {Component, OnInit} from "@angular/core";
import {Item} from "./model/models";
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ShoppingListItemComponent} from "./shopping-list-tem.component";
import {ShoppingListService} from "./shopping-list-service";
import {FilterPipe} from "../filter.pipe";
@Component({
  selector: 'shoping-list',
  template: `

                <section>
                <shopping-list-new-item></shopping-list-new-item>
                </section>
                <section>
                    <h3>My List</h3>
                    Filter:
                    <input type="text" #filter (keyup)="0"/>
                    <div class="list">
                     <ul>
                      <li *ngFor="let item of listItems | myFilter:filter.value" 
                      (click)="onSelect(item)">{{item.name}}  ({{item.amount}}) </li>
                    </ul>
                    </div>
                </section>
                <section *ngIf="selectedItem != null">
                <shopping-list-item [item]="selectedItem"
                (removed)="onRemove()"></shopping-list-item>
                </section>

`,
  directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
  providers: [ShoppingListService],
  pipes : [FilterPipe]
})

export class ShoppingListComponent implements OnInit{
  listItems:Item[] = [];
  selectedItem:Item;
  constructor(private shoppingListService: ShoppingListService) {

  }

  onSelect(item:Item) {
    this.selectedItem = item;
  }


  ngOnInit():any {
    this.listItems = this.shoppingListService.getItems();
  }

  onRemove() {
    this.selectedItem = null;
  }
}
