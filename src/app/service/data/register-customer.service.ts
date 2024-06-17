import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerUtilService, environmentUrls } from './customer-util.service';
export class Customer {
  constructor(public id: number, public firstName: string, public lastName: string, public mobileNumber: string, public emailId: string, public userName: string, public password: string, public profileUpdateOtp: number, public savingsAccount: boolean, public currentAccount: boolean) { }
}

export class CustomerWithoutId {
  constructor(public firstName: string, public lastName: string, public mobileNumber: string, public emailId: string, public userName: string, public password: string, public profileUpdateOtp: number, public savingsAccount: boolean, public currentAccount: boolean) { }
}

export class Response {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class RegisterCustomerService {

  constructor(private http: HttpClient) {

  }

  getCustomerDetails(customerId: number) {
    return this.http.get<Customer>(`http://${environmentUrls.apiUrl}/customer/get_customer?customerId=${customerId}`);
  }

  getUserDetails(userName: string, password: string, basicAuthHeaderString: string) {
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<Customer>(`http://${environmentUrls.apiUrl}/customer/get_customer_by_username?userName=${userName}&password=${password}`, { headers: header });
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Response>(`http://${environmentUrls.apiUrl}/customer/update_customer`, customer);
  }

  sendOtpToUpdateProfile(id: number) {
    return this.http.patch<Response>(`http://${environmentUrls.apiUrl}/customer/send_otp_to_update_profile?id=${id}`, id);
  }



  registerCustomer(firstName: string,
    lastName: string,
    mobileNumber: string,
    emaiId: string,
    userName: string,
    password: string,
    savingsAccount: boolean,
    currentAccount: boolean) {

    console.log("registercustomer invoked!!")
    return this.http.post<Response>(`http://${environmentUrls.apiUrl}/registration/register_customer`, new CustomerWithoutId(firstName, lastName, mobileNumber, emaiId, userName, password, 0, savingsAccount, currentAccount));
  }
}
