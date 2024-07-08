import { Injectable } from '@angular/core';

export class Customer {
  constructor(public id: number,
    public firstName: string,
    public lastName: string,
    public mobileNumber: string,
    public emailId: string,
    public userName: string,
    public password: string,
    public profileUpdateOtp: number,
    public savingsAccount: boolean,
    public currentAccount: boolean) { }
}

@Injectable({
  providedIn: 'root'
})

export class CustomerUtilService {

  constructor() { }
}
