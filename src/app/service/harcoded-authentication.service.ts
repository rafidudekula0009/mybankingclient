import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  public isUserLoggedIn():boolean{
    if(sessionStorage.getItem('userName')!=null){
      return true;
    }
    return false
  }

  public logout(){
    sessionStorage.removeItem('userName');
  }
}
