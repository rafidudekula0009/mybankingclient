import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  public isUserLoggedIn(): boolean {
    if (sessionStorage.getItem('lastName') != null) {
      return true;
    }
    return false
  }

  public logout() {
    sessionStorage.removeItem('lastName');
  }
}
