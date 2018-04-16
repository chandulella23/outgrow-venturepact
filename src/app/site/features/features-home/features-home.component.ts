import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-features-home',
  templateUrl: './features-home.component.html',
  styleUrls: ['./features-home.component.css']
})
export class FeaturesHomeComponent implements OnInit {


  public f_slide1;f_slide2;f_slide3;f_slide4;
  public temp0;temp1;
  constructor(router:Router, title:Title) { 
    title.setTitle("Product Features | Outgrow");
  }

  ngOnInit() {
    this.f_slide1="//dzvexx2x036l1.cloudfront.net/f-slide1.jpg";
    this.f_slide2="//dzvexx2x036l1.cloudfront.net/f-slide2.jpg";
    this.f_slide3="//dzvexx2x036l1.cloudfront.net/slide1.jpg"
    this.f_slide4="//dzvexx2x036l1.cloudfront.net/slide2.jpg"
    this.temp0=null;
    this.temp1=null;
  }
  imageShift(item){
    if(item=="a"){
      console.log("1")
      this.temp0=this.f_slide1;
      this.f_slide1=this.f_slide2;
      this.f_slide2=this.temp0;
    }
    else if(item=="b"){
      console.log("2")
      this.temp1=this.f_slide3;
      this.f_slide3=this.f_slide4;
      this.f_slide4=this.temp1;
    }
    
    
  }

}
