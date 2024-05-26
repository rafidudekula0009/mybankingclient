import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username :string= ''
  password :string = ''
  loginFailed :boolean= false
  errorMessage :string = 'login failed..'
  constructor(private route: Router, private hardcodedAuth: HarcodedAuthenticationService) {

  }

  handleRegister() {
    this.route.navigate(['register'])
  }
  handleLogin() {
    this.loginFailed = this.hardcodedAuth.isUserLoggedIn();
  }
}
