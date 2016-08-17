/**
 * Created by gwuli on 11.08.2016.
 */
import {Injectable} from "@angular/core";
import {Token} from "./auth.token";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {basePath, reqOptions} from "../shared/config.component";


@Injectable()
export class AuthService {

  authenticated: boolean = false;
  saveToken: Token = new Token("login", "password");


  constructor(private http: Http,
              private router: Router) {
  }

  login(token: Token): Observable<Response> {
  // login(token: Token): boolean {
    let headers:Headers = new Headers({'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'});
    let options = new RequestOptions({
      headers: headers,
      withCredentials: true
    });
    return this.http.post(basePath + "login",
    "username=" + token.login +
    "&password=" + token.password,
      options);

    // return this.authenticated

    // if(token.login === this.saveToken.login && token.password === this.saveToken.password){
    //     this.authenticated = true;
    //     return true;
    //   }
    //   return false;

  }

  checkLogged(): Observable<Response> {
    return this.http.get(basePath + "user/whoami", reqOptions);
  }
}
