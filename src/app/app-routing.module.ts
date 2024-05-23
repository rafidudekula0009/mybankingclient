import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'', component:ResgistrationComponent},
  {path:'register', component:ResgistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent},
  {path:'error', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
