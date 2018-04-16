import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-features-home',
  templateUrl: './features-home.component.html',
  styleUrls: ['./features-home.component.css']
})
export class FeaturesHomeComponent implements OnInit {

  constructor(router:Router, title:Title) { 
    title.setTitle("Product Features | Outgrow");
  }

  ngOnInit() {
  }

}
