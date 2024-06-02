import { Component } from '@angular/core';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  lastName = sessionStorage.getItem('lastName');
  constructor(public hardcodedAuth: HarcodedAuthenticationService) {

  }
}
