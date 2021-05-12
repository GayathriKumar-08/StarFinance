import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepnoComponent } from './components/changepno/changepno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmicalComponent } from './components/emical/emical.component';
import { KycdocumentComponent } from './components/kycdocument/kycdocument.component';
import { KycrulebookComponent } from './components/kycrulebook/kycrulebook.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoanformComponent } from './components/loanform/loanform.component';
import { LoginComponent } from './components/login/login.component';
import { NewloginpageComponent } from './components/newloginpage/newloginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { SamplenavComponent } from './components/samplenav/samplenav.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"", component:LandingComponent},
  {path:'landing', component:LandingComponent},
  //{path:'login', component:LoginComponent},
  {path:"sample", component:SamplenavComponent},
  {path:'newlogin', component:NewloginpageComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:'signup', component:SignupComponent},
  {path:'register', component:RegisterpageComponent},
  {path:'changepno', component:ChangepnoComponent},
  {path:'loanform', component:LoanformComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'kycdocument', component:KycdocumentComponent},
  {path:'kycruleguide', component:KycrulebookComponent},
  {path:'emical', component:EmicalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
