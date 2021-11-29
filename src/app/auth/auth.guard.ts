import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "./auth.service";
import {FirebaseAuthState} from "angularfire2";
import "rxjs/add/operator/map";
import "rxjs/add/operator/first";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(): Observable<boolean>|boolean {
    return this.auth.auth$.map((authState: FirebaseAuthState) => {
      if (authState) {
        return true;
      } else {
        this.router.navigateByUrl("/login");
        return false;
      }
    }).first();
  }
}