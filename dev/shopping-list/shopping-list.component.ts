/**
 * Created by gwuli on 03.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {ShoppingListEditComponent} from "./shopping-list-edit.component";
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "../shared/shopping-list.service";
import {Observable} from "rxjs/Rx";
import "rxjs/Rx";

@Component({
  template: `<div class="row">
  <div class="grid"></div>
  <div class="grid-4"><h1>Shopping List</h1></div>
  <div class="grid"></div>
</div>

<my-shopping-list-edit [ingredient]="selectedItem" (eventAdd)="onAdd($event)"></my-shopping-list-edit>


<div class="row row--align-center">
  <div class="grid-6 align-vertical">
    <table>
      <tbody>
      <tr *ngFor="let item of shoppingList | async">
        <div (click)="onSelectItem(item)">
          <td>{{item.name}}</td>
          <td>{{item.amount}}</td>
        </div>
        <td align="justify">
          <button type="button" class="btn btn--color-negative tab" (click)="onDelete(item.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>



`,
  directives: [ShoppingListEditComponent]
})
export class ShoppingListComponent implements OnInit {

  shoppingList: Observable<Ingredient[]>;
  selectedItem: Ingredient = null;


  constructor(private shoppingListService: ShoppingListService) {
    shoppingListService.updateTrigger.subscribe(
      res => this.updateList()
    )
  }

  ngOnInit() {
    this.shoppingList = this.shoppingListService.getAllItem();
  }

  updateList() {
    this.shoppingList = this.shoppingListService.getAllItem();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onDelete(id: string) {
    this.shoppingListService.delete(id).subscribe(
      (res) => {
        this.shoppingListService.updateTrigger.next(true)
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
