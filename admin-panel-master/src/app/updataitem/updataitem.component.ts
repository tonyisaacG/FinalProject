import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updataitem',
  templateUrl: './updataitem.component.html',
  styleUrls: ['./updataitem.component.scss']
})
export class UpdataitemComponent implements OnInit {
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
