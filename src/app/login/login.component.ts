import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username=''
  password=''
  loginFailed=false
  errorMessage='login failed..'
  constructor(private route:Router){

  }

  handleRegister(){
    this.route.navigate(['register'])
  }
  handleLogin(){
    if(this.username==='rafi'&&this.password==='rafi1234'){
      this.loginFailed=false
      this.route.navigate(['welcome',this.username])
    }else{
      this.loginFailed=true
    }
    
  }
}
