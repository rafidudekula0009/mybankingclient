import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
import { Customer, RegisterCustomerService } from '../service/data/register-customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''
  loginFailed: boolean = false
  errorMessage: string = 'login failed..'
  customer: any;
  constructor(private route: Router, private hardcodedAuth: HarcodedAuthenticationService, private registerCustomerService: RegisterCustomerService) {

  }
  ngOnInit(): void {
  }

  handleRegister() {
    this.route.navigate(['register'])
  }
  handleLogin() {
    let username = 'user'
    let password = 'user'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    this.registerCustomerService.getUserDetails(this.username, this.password, basicAuthHeaderString)
      .subscribe(data => {
        if (data.lastName != null) {
          this.customer = data;
          this.loginFailed = false;
          sessionStorage.setItem('lastName', this.customer.lastName);
          sessionStorage.setItem('id', this.customer.id);
          this.route.navigate(['welcome', this.username]);
        } else {
          this.loginFailed = true
        }
      }, error => {
        this.loginFailed = true
      });

  }

}
