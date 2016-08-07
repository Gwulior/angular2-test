/**
 * Created by gwuli on 03.08.2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {Ingredient} from "../shared/ingredient";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {ShoppingListService} from "../shared/shopping-list.service";

@Component({
  selector: 'my-shopping-list-edit',
  template: `

    <div class="row">
    <div class="grid"></div>
    <div class="grid-6">
    <h1>{{addForm.controls['id'].value == null ? 'Add' : 'Edit'}} Item </h1>
    <form [formGroup]="addForm" (ngSubmit)="onSubmit(addForm.value)">
    <fieldset>
    <label for="item-id" >Id</label>
    <input type="text" [formControl]="addForm.controls['id']" id="item-id"  disabled/>
    </fieldset>
    <fieldset>
    <label for="item-name" >Name</label>
    <input type="text" [formControl]="addForm.controls['name']" id="item-name" />
    </fieldset>
    <fieldset>
    <label for="item-amount" >Amount</label>
    <input type="number" [formControl]="addForm.controls['amount']" id="item-amount" />
    </fieldset>
    <fieldset>
    <span class>
    <button class="btn btn--color-positive" type="submit">{{addForm.controls['id'].value == null ? 'Add' : 'Edit'}}</button>
    <button class="btn btn--style-ghost btn--hoverColor-negative" type="button" (click)="createForm()">Reset</button>
    </span>
    </fieldset>
    
    
    </form>
    </div>
    <div class="grid"></div>
    </div>

`,
  directives: [REACTIVE_FORM_DIRECTIVES],
  styleUrls: ['src/css/shopping-list.css']
})
export class ShoppingListEditComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ShoppingListService) {
    console.log('im constructor');
    this.createForm();
  }

  @Input()
  set ingredient(edotItem: Ingredient) {
    console.log('im setter');
    if (edotItem != null) {
      (<FormControl>this.addForm.controls['id']).updateValue(edotItem.id);
      (<FormControl>this.addForm.controls['name']).updateValue(edotItem.name);
      (<FormControl>this.addForm.controls['amount']).updateValue(edotItem.amount);
    }

  }

  ngOnInit() {
    console.log('im init');
  }

  onSubmit(item: Ingredient) {

    if (!((item.name == null || item.name == '' || item.name == ' ') || (item.amount == null))) {
      this.service.insertItem(this.addForm.value).subscribe(
        res => this.service.updateTrigger.next(true)
      );

    } else {
      this.emptyCheker();
    }
    this.createForm();
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      'id': [null],
      'name': [' '],
      'amount': [' ', Validators.required]
    })
  }

  emptyCheker() {
    window.alert("PLease fill the values");
  }
}
