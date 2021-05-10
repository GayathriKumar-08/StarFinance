import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepno',
  templateUrl: './changepno.component.html',
  styleUrls: ['./changepno.component.css']
})
export class ChangepnoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 
}
