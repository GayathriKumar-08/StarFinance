import { compileComponentFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankloginComponent } from './components/banklogin/banklogin.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:BankloginComponent},
  {path:'login', component:BankloginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'changepassword', component:ChangepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
