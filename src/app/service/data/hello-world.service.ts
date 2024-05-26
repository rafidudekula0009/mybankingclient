import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Customer {
  constructor(public firstName:string,public lastName:string,public mobileNumber:string,public emailId:string,public userName:string,public password:string){}
}

@Injectable({
  providedIn: 'root'
})

export class HelloWorldService {

  constructor(private http:HttpClient) {

  }

  getCustomerDetails(customerId: number) {
    return this.http.get<Customer>(`http://localhost:8080/customer/get_customer?customerId=${customerId}`);
  }

  registerCustomer(firstName:string,
    lastName:string,
    mobileNumber:string,
    emaiId:string,
    userName:string,
    password:string) {

    console.log("registercustomer invoked!!")
    return this.http.post<string>(`http://localhost:8080/registration/register_customer`,new Customer(firstName,lastName,mobileNumber,emaiId,userName,password));
  }
}
