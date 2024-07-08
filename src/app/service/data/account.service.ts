import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.const';
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

  getAccountDetails(customerId: number, header: HttpHeaders) {
   
    return this.http.get<any>(`${API_URL}/account/get_account_details?customerId=${customerId}`, {headers : header});
  }

  getUserDetails(userName: string, password: string) {
    return this.http.get<Customer>(`${API_URL}/customer/get_customer_by_username?userName=${userName}&password=${password}`);
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Response>(`${API_URL}/customer/update_customer`, customer);
  }

  sendOtpToUpdateProfile(id: number) {
    return this.http.patch<Response>(`${API_URL}/customer/send_otp_to_update_profile?id=${id}`, id);
  }

}
