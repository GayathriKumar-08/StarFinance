import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankloginComponent } from './components/banklogin/banklogin.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    BankloginComponent,
    ChangepasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
