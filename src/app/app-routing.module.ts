import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  //path:'**' must be in the last/bottom as order is mandatory. If we place it in between then even if we enter /login it might show error page. 
  { path: '', component: ResgistrationComponent },//by default when we open localhost:4200, registration page will be opened
  { path: 'register', component: ResgistrationComponent },
  { path: 'login', component: LoginComponent },//when user enters localhos:4200/login, then login component/html page will be opened
  { path: 'logout', component: LogoutComponent },
  { path: 'help', component: NeedhelpComponent },
  { path: 'about', component: NeedhelpComponent },

  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] }, //:name is a request parameter which should be passed via url. Here canActivate is an implemented method in the RoutGuardService which implements CanActivate interface. We can avoid user entering welcome page or any other page by authenticating like this. Only if user is logged in, then only he will be able to login
  { path: '**', component: ErrorComponent },//when user enters wrong url or any error occurs during user journey, then it will be rendered
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
