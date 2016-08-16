/**
 * Created by gwuli on 11.08.2016.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Response} from "@angular/http";

@Component({
    selector: 'login-page',
    template: `
<div class="row row--align-center">
<div class="grid3">
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="login" id="login"/>
  <label for="login">Login</label>
  <input type="text" formControlName="password" id="password"/>
  <label for="password">Password</label>
  <button type="submit">Login</button>
</form>
<p *ngIf="loginError==true" class="message message--color-negative">YOU SHALL NOT PASS</p>
<p class="message message--color-negative">Server response is = {{respCode}}</p>
</div>
</div>
`,
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean = false;
  respCode: number;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private router: Router) {
      this.loginForm = this.formBuilder.group({
        "login" : ["", Validators.required],
        "password" : ["", Validators.required]
      })
    }

    onSubmit() {
      var loginResponse: Observable<Response> = this.authService.login(this.loginForm.value);
      loginResponse.subscribe(
        res => {
          this.authService.authenticated = true;
          this.router.navigate(["recipes"])
        },
        error => {
          this.loginError = true;
          this.respCode = error.status;
        }
      );

      // var b: boolean = this.authService.login(this.loginForm.value);
      // if(b){
      //   this.router.navigate(["recipes"]);
      // } else {
      //   this.loginError = true;
      // }
    }

    ngOnInit() {

    }

}
