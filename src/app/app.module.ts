import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ResgistrationComponent } from './resgistration/resgistration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { NeedhelpComponent } from './needhelp/needhelp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ViewTransactionHistoryComponent } from './view-transaction-history/view-transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent, //any unknown error occures then this page is shown as this is routed as '**' in the routes
    ResgistrationComponent,
    LoginComponent,
    WelcomeComponent,
    FooterComponent, //footer
    MenuComponent, //header
    LogoutComponent,
    NeedhelpComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    ViewTransactionHistoryComponent //Just information to user
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule //This is used to make use of features like ngModel, ngIf in the html pages of the components added in the declarations above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
