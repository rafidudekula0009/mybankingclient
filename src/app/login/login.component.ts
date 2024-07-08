import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
import { Customer, RegisterCustomerService } from '../service/data/register-customer.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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
  constructor(private route: Router, private hardcodedAuth: HarcodedAuthenticationService, private registerCustomerService: RegisterCustomerService, private basicAuthenticationService:BasicAuthenticationService) {

  }
  ngOnInit(): void {
  }

  handleRegister() {
    this.route.navigate(['register'])
  }
  handleLogin() {
    this.registerCustomerService.getUserDetails(this.username, this.password, this.basicAuthenticationService.getUserDetails(this.username, this.password))
      .subscribe(data => {
        if (data.lastName != null) {
          alert("success part");
          this.customer = data;
          this.loginFailed = false;
          // sessionStorage.setItem('lastName', this.customer.lastName);
          // sessionStorage.setItem('id', this.customer.id);
          this.route.navigate(['welcome', this.username]);
        } else {
          this.loginFailed = true
        }
      }, error => {
        this.loginFailed = true
      });

  }

}
