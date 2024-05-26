import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';
import { HelloWorldService } from '../service/data/hello-world.service';

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css']
})
export class ResgistrationComponent {

  //this keyword must be used to make use of these attributes
  firstname = 'gongati'
  lastname = 'prassilla'
  mobileno = '9581144064'
  email = 'prasrafi@gmail.com'
  username = 'prassilla'
  password = 'prassilla1234'

  successMsg:string=''
  errorMessage = 'Some error occured'
  isRegistrationFailed = false

  //Router can be used to navigate from one component/page to another componet/page
  constructor(private route: Router, hardcodedAuth: HarcodedAuthenticationService, private helloService: HelloWorldService) {

  }

  handleRegister() {
    this.helloService.registerCustomer(this.firstname, this.lastname, this.mobileno, this.email, this.username, this.password);
    this.helloService.registerCustomer(this.firstname, this.lastname, this.mobileno, this.email, this.username, this.password).subscribe((data)=>{handleResponse(data)});
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
function handleResponse(data: String): void {
  console.log("handle response invoked!!")
  console.log("response=> "+data)
}

