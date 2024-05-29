import { Component, OnInit } from '@angular/core';
import { Customer, RegisterCustomerService, Response } from '../service/data/register-customer.service';
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
  otp: any;
  isOtpSent = false;
  profileOtpResponse!: string
  errorMsg = '';
  response!: Response;
  anyerror: any
  constructor(private router: Router, private customerService: RegisterCustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerDetails(Number(this.id))
      .subscribe(data => {
        this.customer = data;
      })
  }

  sendOtp() {

    this.customerService.sendOtpToUpdateProfile(Number(sessionStorage.getItem('id'))).subscribe(
      data => {
        this.response = data;
        if (this.response.message === "Success") {
          this.isOtpSent = true;
        } else {
          this.isOtpSent = false;
          this.errorMsg = 'Unable to send otp at this time';
        }
      }
    );
  }

  validateAndSaveProfileData() {
    this.customer.firstName = this.firstName;
    this.customer.lastName = this.lastName;
    this.customer.profileUpdateOtp = this.otp;

    this.customerService.updateCustomer(this.customer).subscribe(
      data => {
        console.log("response from update=>" + data)
        this.response = data;
        if (this.response.message === "Success") {
          this.router.navigate(['profile']);
        } else {
          this.errorMsg = 'Invalid otp'
        }
      },
      error => {
        this.anyerror = error;
        console.log("error message from update=>" + error.errorMessage)
      }
    );
  }

}
