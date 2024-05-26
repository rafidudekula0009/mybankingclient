import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

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

  errorMessage = 'Some error occured'
  isRegistrationFailed = false

  //Router can be used to navigate from one component/page to another componet/page
  constructor(private route: Router, hardcodedAuth:HarcodedAuthenticationService) {

  }

  handleRegister() {
    if (this.firstname === 'rafi') {
      this.isRegistrationFailed = false;
      this.route.navigate(['login'])
    } else {
      this.isRegistrationFailed = true;
    }
  }

  handleLogin() {
    this.route.navigate(['login'])
  }
}
