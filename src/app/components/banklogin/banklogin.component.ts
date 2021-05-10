import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banklogin',
  templateUrl: './banklogin.component.html',
  styleUrls: ['./banklogin.component.css']
})
export class BankloginComponent implements OnInit {
  validPattern = "^[a-zA-Z0-9]{6}$";
  form=new FormGroup(
    {
      empid:new FormControl('',[Validators.required,Validators.pattern(this.validPattern)]),
      password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    }
  );
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onClick()
  {
    this.route.navigate(["dashboard"]);
  }

}
