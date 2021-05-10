import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  form=new FormGroup(
    {
      oldpassword:new FormControl('',Validators.required),
      newpassword:new FormControl('',Validators.required),
      renewpassword:new FormControl('',Validators.required),
    }
  );
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
