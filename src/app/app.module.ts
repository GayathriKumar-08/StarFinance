import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgOtpInputModule } from 'ng-otp-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NewloginpageComponent } from './components/newloginpage/newloginpage.component';
import { LoanformComponent } from './components/loanform/loanform.component';
import { LandingComponent } from './components/landing/landing.component';
import { ChangepnoComponent } from './components/changepno/changepno.component';
import { SamplenavComponent } from './components/samplenav/samplenav.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    LoginComponent,
    DashboardComponent,
    NewloginpageComponent,
    LoanformComponent,
    LandingComponent,
    ChangepnoComponent,
    SamplenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
