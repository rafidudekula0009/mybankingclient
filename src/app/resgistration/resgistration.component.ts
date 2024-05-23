import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgistration',
  templateUrl: './resgistration.component.html',
  styleUrls: ['./resgistration.component.css']
})
export class ResgistrationComponent {

  firstname=''
  lastname=''
  mobileno=''
  email=''
  username=''
  password=''

  errorMessage='Some error occured'
  isRegistrationFailed=false

  constructor(private route:Router){

  }

  handleRegister(){
    if(this.firstname==='rafi'){
      this.isRegistrationFailed=false;
    this.route.navigate(['login'])
    }else{
      this.isRegistrationFailed=true;
    }
  }

  handleLogin(){
    this.route.navigate(['login'])
  }
}
