import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'', component:ResgistrationComponent},//by default when we open localhost:4200, registration page will be opened
  {path:'register', component:ResgistrationComponent},
  {path:'login', component:LoginComponent},//when user enters localhos:4200/login, then login component/html page will be opened
  {path:'welcome/:name', component:WelcomeComponent},
  {path:'**', component:ErrorComponent},//when user enters wrong url or any error occurs during user journey, then it will be rendered
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
