import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HarcodedAuthenticationService } from './harcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})

//CanActivate is used to authenticate the url/route. 
//We can avoid user entering unauthorized urls by deactivating them until he logged in. 
//We will bind this service to the rout in the app-routing.module.ts
export class LoginRouteGuardService implements CanActivate {

  constructor(private hardcodedAuth: HarcodedAuthenticationService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.hardcodedAuth.isUserLoggedIn())
      return true;

    this.router.navigate(['welcome', sessionStorage.getItem('lastName')]);
    return false;
  }

}
