import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

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

  basicAuthHeaderString:any;
  
  getUserDetails(userName: string, password: string) {

   this.basicAuthHeaderString = 'Basic ' + window.btoa('user' + ':' + 'user')

    let header = new HttpHeaders({
      Authorization: this.basicAuthHeaderString
    });
    return header
  }

}
