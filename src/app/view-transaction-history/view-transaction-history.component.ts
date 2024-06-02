import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountTransactionService, AccountTransactions } from '../service/data/account-transaction.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-view-transaction-history',
  templateUrl: './view-transaction-history.component.html',
  styleUrls: ['./view-transaction-history.component.css']
})
export class ViewTransactionHistoryComponent implements OnInit {
  toDate: any;
  accountId = this.activatedRoute.snapshot.params['accountId'];
  accountType = this.activatedRoute.snapshot.params['accountType'];
  accountNumber = this.activatedRoute.snapshot.params['accountNumber'];
  fromDate: any;
  enableH2 = false;
  accountTxnDetails!: Array<AccountTransactions>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accountTransactionService: AccountTransactionService) {

  }
  ngOnInit(): void {
    this.accountTransactionService.getAccountTransactions(4, this.accountId).subscribe(
      data => {
        this.accountTxnDetails = data;
      }
    );
  }

  viewTransactionsBetweenDates() {
    this.accountTransactionService.getAccountTransactionsBetweenDates(this.accountId, this.fromDate, this.toDate).subscribe(
      data => {
        this.accountTxnDetails = data;
        if (this.accountTxnDetails.length === 0) {
          alert("no transactions found between the given dates");
        }

        this.enableH2 = true;
      }
    );
  }



}
