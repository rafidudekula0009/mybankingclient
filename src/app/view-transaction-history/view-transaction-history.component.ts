import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountTransactionService } from '../service/data/account-transaction.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-view-transaction-history',
  templateUrl: './view-transaction-history.component.html',
  styleUrls: ['./view-transaction-history.component.css']
})
export class ViewTransactionHistoryComponent implements OnInit {
  toDate: any;
  accountId = this.activatedRoute.snapshot.params['accountId'];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accountTransactionService: AccountTransactionService) {

  }
  ngOnInit(): void {
    this.accountTransactionService.getAccountTransactions(4, this.accountId).subscribe(
      data => {
        this.accountTxnDetails = data;
      }
    );
  }
  fromDate: any;
  viewTransactionsBetweenDates() {
    this.accountTransactionService.getAccountTransactionsBetweenDates(this.accountId, this.fromDate, this.toDate).subscribe(
      data => {
        this.accountTxnDetails = data;
      }
    );
  }

  accountTxnDetails: any;

}
