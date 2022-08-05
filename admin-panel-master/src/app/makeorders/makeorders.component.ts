import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeorders',
  templateUrl: './makeorders.component.html',
  styleUrls: ['./makeorders.component.scss']
})
export class MakeordersComponent implements OnInit {
  products : any= [];
  constructor() {this. products=[{name:'batehk',price:5,imagurl:'assets/photos/1.jpg'},
  {name:'grabs',price:5,imagurl:'assets/photos/6.jpg'},
  {name:'apples',price:5,imagurl:'assets/photos/4.jpg'},
  {name:'panana',price:5,imagurl:'assets/photos/11.jpg'}]}

  ngOnInit(): void {
  }

}
