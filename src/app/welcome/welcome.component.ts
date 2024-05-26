import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Customer, HelloWorldService } from '../service/data/hello-world.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  //ActivatedRoute is used to fetch the request parameters/some varaible values sent through url. ex:localhost:4200/welcome/rafi i.e, welcome/<value of the attribute 'name'>
  //So name and any other variable passed in the url can be fetched using ActivatedRoute
  constructor(private router: ActivatedRoute, private helloService:HelloWorldService) {

  }

  //snapshot contains the snapshot of all variables/attributes received.
  name = this.router.snapshot.params['name']
  custom:any;

  getCustomerDetails(){
    console.log("welcome component invoked!!")
    console.log(this.helloService.getCustomerDetails(1));
    this.helloService.getCustomerDetails(1).subscribe(data=>{handleResponse(data); this.custom=data;});
    console.log("my custom=> "+this.custom);
  }
}

function handleResponse(data: Customer): void {
  console.log(data);
 console.log(data.firstName);
}


