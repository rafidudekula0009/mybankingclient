import { Component, OnInit } from '@angular/core';
import { Customer, RegisterCustomerService } from '../service/data/register-customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  customer!: Customer;
  firstName = ''
  lastName = ''
  id = sessionStorage.getItem('id')
  constructor(private router: Router, private customerService: RegisterCustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerDetails(Number(this.id))
      .subscribe(data => {
        this.customer = data;
      })
  }

  saveForm() {
    this.customer.firstName = this.firstName;
    this.customer.lastName = this.lastName;
    this.customerService.updateCustomer(this.customer);
    this.customerService.updateCustomer(this.customer).subscribe(
      data => this.customer = data
    );
    this.router.navigate(['profile']);
  }
}
