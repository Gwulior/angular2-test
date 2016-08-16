import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
/**
 * Created by gwuli on 11.08.2016.
 */
@Injectable()
export class AuthActivateGuard implements CanActivate{


  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    if(!this.authService.authenticated){
      this.router.navigate([""]);
      console.log("nizzya)");
      return false;
    }
    return true;
  }

}
