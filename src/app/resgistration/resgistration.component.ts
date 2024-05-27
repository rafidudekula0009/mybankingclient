import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
import { RegisterCustomerService, Response } from '../service/data/register-customer.service';

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css']
})
export class ResgistrationComponent {

  //this keyword must be used to make use of these attributes
  firstname = ''
  lastname = ''
  mobileno = ''
  email = ''
  username = ''
  password = ''

  successMsg = '';
  errorMessage = 'Some error occured'
  isRegistrationFailed = false

  //Router can be used to navigate from one component/page to another componet/page
  constructor(private route: Router, hardcodedAuth: HarcodedAuthenticationService, private registerCustomerService: RegisterCustomerService) {

  }

  handleRegister() {
    this.registerCustomerService.registerCustomer(this.firstname, this.lastname, this.mobileno, this.email, this.username, this.password);
    this.registerCustomerService.registerCustomer(this.firstname, this.lastname, this.mobileno, this.email, this.username, this.password)
      .subscribe((data) => {
        this.successMsg = data.message;
      }, error => { console.log(error.error.message), this.errorMessage = error.error.message });
    if (this.successMsg === '') {
      this.isRegistrationFailed = true;
    } else {
      this.isRegistrationFailed = false;
      this.route.navigate(['login'])
    }
  }

  handleLogin() {
    this.route.navigate(['login'])
  }
}
