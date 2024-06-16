import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './register-customer.service';
import { environmentUrls } from './customer-util.service';

export class AccountTransactions {
  constructor(
    public transactionType: string,
    public txnAmount: Number,
    public depositOrTransferAccountNumber: string,
    public txnId: string,
    public dateOfTransaction: string,
    public accountTempId: Number) { }
}

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionService {

  constructor(private http: HttpClient) {

  }

  getAccountTransactions(noOfRows: Number, accountId: Number) {
    return this.http.get<any>(`http://${environmentUrls.apiUrl}/account_transactions/get_transactions_by_count?noOfRows=${noOfRows}&accountId=${accountId}`);
  }

  getAccountTransactionsBetweenDates(accountId: Number, fromDate: String, toDate: String) {
    return this.http.get<any>(`http://${environmentUrls.apiUrl}/account_transactions/get_transactions_between_dates?accountId=${accountId}&fromDate=${fromDate}&toDate=${toDate}`);
  }

}
