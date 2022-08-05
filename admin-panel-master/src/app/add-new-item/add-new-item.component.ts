import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})
export class AddNewItemComponent implements OnInit {
  url="./assets/fish.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  onselectFile(e)
  {
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(ee:any)=>{
        this.url=ee.target.result;

      }
    }
  }

}
