import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, RegisterCustomerService } from '../service/data/register-customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //snapshot contains the snapshot of all variables/attributes received.
  id = sessionStorage.getItem('id');
  customer: any;

  //ActivatedRoute is used to fetch the request parameters/some varaible values sent through url. ex:localhost:4200/welcome/rafi i.e, welcome/<value of the attribute 'name'>
  //So name and any other variable passed in the url can be fetched using ActivatedRoute
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private helloService: RegisterCustomerService) {

  }
  ngOnInit(): void {
    this.customer = new Customer(1, "", "", "", "", "", "", 0, false, false);

    this.helloService.getCustomerDetails(Number(this.id)).subscribe(data => { this.customer = data; });
  }

  editProfile(id: number) {
    this.router.navigate(['profile_update', sessionStorage.getItem('id')])
  }
}
