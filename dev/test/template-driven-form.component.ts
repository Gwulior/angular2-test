import {Component} from "@angular/core";
/**
 * Created by gwuli on 25.07.2016.
 */

@Component({
  selector: 'my-template-driven',
  template: `
     <h2>Sign-up form</h2>
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div>
          <label for="mail>">Mail</label>
          <input ngControl="mail" type="text" id="mail>" required #email="ngForm"/>
          <span class="validator-error" *ngIf="!email.valid">Not Valid</span>
        </div>
        <div>
          <label for="password>">Password</label>
          <input ngControl="password" type="text" id="password" required #password="ngForm"/>
          <span class="validator-error" *ngIf="!password.valid">Not Valid</span>
        </div>
        <div>
          <label for="confirm-password>">Confirm Password</label>
          <input ngControl="confirm-password" type="text" id="confirm-password>>" required #passwordConfirm="ngForm"/>
          <span class="validator-error" *ngIf="!passwordConfirm.valid">Not Valid</span>
        </div>
        <button type="submit" [disabled]="!f.valid ||
         password.value !== passwordConfirm.value">Submit</button>
      </form>
        <h2>You submitted</h2>
        <div>Mail: {{user.mail}}</div>
        <div>Password: {{user.password}}</div>
`
})

export class TemplateDriverFormComponent {

  user = {mail : '', password: ''};

  onSubmit(form) {
    this.user.mail = form.value['mail'];
    this.user.password = form.controls['password'].value;

  }
}
