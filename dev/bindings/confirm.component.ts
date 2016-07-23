import {Component, EventEmitter, Output, Input} from "@angular/core";
/**
 * Created by gwuli on 23.07.2016.
 */

@Component({
  selector : 'my-confirm',
  template : `
    <h1> You submitted following details. Is this correct?</h1>
    <p>Your name is <span class="highlight">{{myself.name}}</span> and you'r 
    <span class="highlight">{{myself.age}}</span> years old. 
    Please click on confirm if you have made any changes to this information.</p>
    <div>
      <label for="name">Your Name</label>
      <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyUp()"/>    
  </div>
  <div>
      <label for="age">Your Age</label>
      <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyUp()"/>    
  </div>
  <br>
  <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
  <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
  <br>
  <button [disabled]="!(isFilled && isValid)" (click)="onConfirm()">Submit</button>
`

})

export class ConfirmComponent {

  @Input()myself = {
    name : '',
    age : ''
  };

  isFilled:boolean = false;
  isValid:boolean = false;
  @Output()confirmed = new EventEmitter<{name:string, age:string}>();

  onKeyUp(){
    this.isFilled = (this.myself.name != '' && this.myself.age != '');
    this.isValid = (/^\d+/.test(this.myself.age));

  }

  onConfirm () {
    this.confirmed.emit(this.myself);
  }
}
