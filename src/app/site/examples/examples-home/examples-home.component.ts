import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-home',
  templateUrl: './examples-home.component.html',
  styleUrls: ['./examples-home.component.css']
})
export class ExamplesHomeComponent implements OnInit {

//   imgList = [
//     {
//       url:'assets/images/calc06.jpg'
//     },
//     {
//       url:'assets/images/calc06.jpg'
//     },
//     {
//       url:'assets/images/calc06.jpg'
//     }
// ]
  constructor() { }

  ngOnInit() {
  }

  firedfunc(){
    document.write("hello")
  }
}
