import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kycdocument',
  templateUrl: './kycdocument.component.html',
  styleUrls: ['./kycdocument.component.css']
})
export class KycdocumentComponent implements OnInit {

  constructor() { }
  optionSelected:string;
  value:string;
  public onSelected($ee:any)
  {
        if(this.optionSelected=="Front view")
        {
           this.value=this.optionSelected;
        }
        else if(this.optionSelected=="Back view")
        {
          this.value=this.optionSelected;
        }
  }
  public onClick()
  {
    console.log("submitted");
  }

  urllink:string="assets/images/docup.png";
  

  selectFiles(event)
    {
      if(event.target.files)
      {
        var reader=new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload=(event:any)=>
        {
          this.urllink=event.target.result
        }
      }
    }

  ngOnInit(): void {
  }

}
