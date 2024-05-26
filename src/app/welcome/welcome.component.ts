import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  //ActivatedRoute is used to fetch the request parameters/some varaible values sent through url. ex:localhost:4200/welcome/rafi i.e, welcome/<value of the attribute 'name'>
  //So name and any other variable passed in the url can be fetched using ActivatedRoute
  constructor(private router: ActivatedRoute) {

  }

  //snapshot contains the snapshot of all variables/attributes received.
  name = this.router.snapshot.params['name']
}
