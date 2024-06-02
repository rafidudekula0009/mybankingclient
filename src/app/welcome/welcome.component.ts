import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Customer, RegisterCustomerService } from '../service/data/register-customer.service';
import { AccountService } from '../service/data/account.service';
import { AccountTransactionService } from '../service/data/account-transaction.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
  accountDetails: any;
  //ActivatedRoute is used to fetch the request parameters/some varaible values sent through url. ex:localhost:4200/welcome/rafi i.e, welcome/<value of the attribute 'name'>
  //So name and any other variable passed in the url can be fetched using ActivatedRoute
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private helloService: RegisterCustomerService, private accountService: AccountService, private accountTransactionService: AccountTransactionService) {

  }

  ngOnInit(): void {
    this.accountService.getAccountDetails(Number(sessionStorage.getItem('id'))).subscribe(data => {
      this.accountDetails = data;
    });
  }
  //snapshot contains the snapshot of all variables/attributes received. This variable is used in the html page
  name = this.activatedRoute.snapshot.params['userName']
  showProfilePage() {
    this.router.navigate(['profile']);
  }

  viewTransactions(accountId: Number) {
    this.router.navigate(['view_transaction_history', accountId])
  }
}



