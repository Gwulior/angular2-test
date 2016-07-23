import {Component, EventEmitter, Output, Input} from "@angular/core";


@Component ({
  selector : 'my-input',
  template : `
<h1>Your details, please</h1>
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
  <button [disabled]="!(isFilled && isValid)" (click)="onSubmit()">Submit</button>
  
`

})
export class InputComponent {

  @Input()myself = {
      name : '',
      age : ''
    };

    @Output()submitted = new EventEmitter<{name: string, age:string}>();

    isFilled:boolean = false;
    isValid:boolean = false;

  onKeyUp(){
    this.isFilled = (this.myself.name != '' && this.myself.age != '');
    this.isValid = (/^\d+/.test(this.myself.age));

  }

  onSubmit() {
    this.submitted.emit(this.myself);
  }
}
