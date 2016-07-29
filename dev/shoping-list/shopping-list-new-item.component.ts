import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {Item, ItemImpl} from "./model/models";
import {ShoppingListService} from "./shopping-list-service";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

/**
 * Created by gwuli on 24.07.2016.
 */

@Component({
  selector: 'shopping-list-new-item',
  template: `
          <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
            <div class="input">
              <label for="item-name">Name</label>
              <input type="text" id="item-name" [(ngModel)]="item.name"
              [formControl]="myForm.controls['itemName']"/>
            </div>
            <div class="input">
              <label for="item-amt">Name</label>
              <input type="number" id="item-amt" [(ngModel)]="item.amount"
                     [formControl]="myForm.controls['itemAmount']"/>
            </div>
            <button type="submit" [disabled]="!myForm.valid">Add Item</button>
          </form>
          

        `,
  directives : [REACTIVE_FORM_DIRECTIVES]
})

export class ShoppingListNewItemComponent implements OnInit{

  item:Item = new ItemImpl('', 0);
  myForm: FormGroup;

  constructor(private shoppingListService:ShoppingListService,
              private formBuilder:FormBuilder) {
  }


  ngOnInit():any {
    this.myForm = this.formBuilder.group({
      itemName : new FormControl('', Validators.required),
      itemAmount : new FormControl('', Validators.compose([this.greaterZero,
                                      Validators.required]))

    })
  }

  onSubmit():void {
   this.shoppingListService.insertItem(Object.assign({}, this.item));
  }

  greaterZero(control: FormControl): {[s:string] : boolean} {
    console.log(control, 123);
    if(control.value <= 0) {
      return {notEnough : true}
    }
  }

}
