import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
/**
 * Created by gwuli on 25.07.2016.
 */

@Component({
  selector: 'my-data-driven',
  template: `
     <h2>Sign-up form</h2>
      <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="mail>">Mail</label>
          <input [formControl]="myForm.controls['mail']" type="text" id="mail>" #mail="ngForm"/>
          <span class="validator-error" *ngIf="!mail.valid">Not Valid</span>
        </div>
        <div>
          <label for="password>">Password</label>
          <input [formControl]="myForm.controls['password']" type="text" id="password" #password="ngForm"/>
          <span class="validator-error" *ngIf="!password.valid">Not Valid</span>
        </div>
        <div>
          <label for="confirm-password>">Confirm Password</label>
          <input [formControl]="myForm.controls['confirmPassword']" type="text" id="confirm-password>>" #confirmPassword="ngForm"/>
          <span class="validator-error" *ngIf="!confirmPassword.valid">Not Valid</span>
        </div>
        <button type="submit">Submit</button>
      </form>
        <h2>You submitted</h2>
        <div>Mail: {{user.mail}}</div>
        <div>Password: {{user.password}}</div>
`,
  directives : [REACTIVE_FORM_DIRECTIVES]
  //need this fuking reactive_shit for new directives to work
})

export class DataDrivenFormComponent implements OnInit{

  myForm:FormGroup;

  user = {mail : '', password: ''};


  constructor(private formBuilder: FormBuilder) {

  }

  onSubmit() {
    this.user = this.myForm.value;
  }

  ngOnInit():void {
    this.myForm = this.formBuilder.group({
      'mail' : ['', Validators.required],
      'password' : ['', Validators.compose([Validators.required, hasNumbers])],
      'confirmPassword' : ['', Validators.required]
    })
  }
}

function hasNumbers(control: FormControl):{[key:string] : any} {
  console.log(123);
  if(!control.value.match('\\d+')){
    return {asd: 123}
  }
}
