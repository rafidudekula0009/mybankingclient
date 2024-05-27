import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
import { RegisterCustomerService } from '../service/data/register-customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = ''
  password: string = ''
  loginFailed: boolean = false
  errorMessage: string = 'login failed..'
  constructor(private route: Router, private hardcodedAuth: HarcodedAuthenticationService, private helloService: RegisterCustomerService) {

  }

  handleRegister() {
    this.route.navigate(['register'])
  }
  handleLogin() {
    this.helloService.getUserDetails(this.username, this.password);
    this.helloService.getUserDetails(this.username, this.password).subscribe(data => {
      if (data.userName != null) {
        this.loginFailed = false;
        sessionStorage.setItem('userName', this.username);
        this.route.navigate(['welcome', this.username]);
      } else {
        console.log("updating loginFailed to true => " + this.loginFailed)
        this.loginFailed = true
      }
    }, error => {
      this.loginFailed = true
    });

  }
}
