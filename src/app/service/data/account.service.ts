import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer-util.service';

export class Account {
  constructor(public accountType: string, public balance: Number, public accountNumber: string, public IfscCode: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {

  }

  getAccountDetails(customerId: number) {
    return this.http.get<any>(`http://localhost:8080/account/get_account_details?customerId=${customerId}`);
  }

  getUserDetails(userName: string, password: string) {
    return this.http.get<Customer>(`http://localhost:8080/customer/get_customer_by_username?userName=${userName}&password=${password}`);
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Response>(`http://localhost:8080/customer/update_customer`, customer);
  }

  sendOtpToUpdateProfile(id: number) {
    return this.http.patch<Response>(`http://localhost:8080/customer/send_otp_to_update_profile?id=${id}`, id);
  }

}
