import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Customer {
  constructor(public firstName: string, public lastName: string, public mobileNumber: string, public emailId: string, public userName: string, public password: string) { }
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
    return this.http.get<Customer>(`http://localhost:8080/customer/get_customer?customerId=${customerId}`);
  }

  getUserDetails(userName: string, password: string) {
    return this.http.get<Customer>(`http://localhost:8080/customer/get_customer_by_username?userName=${userName}&password=${password}`);
  }


  registerCustomer(firstName: string,
    lastName: string,
    mobileNumber: string,
    emaiId: string,
    userName: string,
    password: string) {

    console.log("registercustomer invoked!!")
    return this.http.post<Response>(`http://localhost:8080/registration/register_customer`, new Customer(firstName, lastName, mobileNumber, emaiId, userName, password));
  }
}
