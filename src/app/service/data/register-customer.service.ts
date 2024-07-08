import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_URL } from 'src/app/app.const';
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
    return this.http.get<Customer>(`${API_URL}/customer/get_customer?customerId=${customerId}`);
  }
  customer: any;
  getUserDetails(userName: string, password: string, header: HttpHeaders) {
    // We can use pipe to do some operation on observable. 
    // Here we used pipe along with map to consume data and then store info into session. 
    // We have to return the data because the caller would need this info to proceed further
    return this.http.get<Customer>
      (`${API_URL}/customer/get_customer_by_username?userName=${userName}&password=${password}`,
        { headers: header }).pipe(
          map(
            data => {
              this.customer = data;
              sessionStorage.setItem('lastName', this.customer.lastName);
              sessionStorage.setItem('id', this.customer.id);
              return data;
            }
          )
        );
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Response>(`${API_URL}/customer/update_customer`, customer);
  }

  sendOtpToUpdateProfile(id: number) {
    return this.http.patch<Response>(`${API_URL}/customer/send_otp_to_update_profile?id=${id}`, id);
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
    return this.http.post<Response>(`${API_URL}/registration/register_customer`, new CustomerWithoutId(firstName, lastName, mobileNumber, emaiId, userName, password, 0, savingsAccount, currentAccount));
  }
}
