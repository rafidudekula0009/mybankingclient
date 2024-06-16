import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  lastName:string|any;
  constructor(public hardcodedAuth: HarcodedAuthenticationService) {

  }
  ngOnInit(): void {
    this.lastName = sessionStorage.getItem('lastName');
  }
}
