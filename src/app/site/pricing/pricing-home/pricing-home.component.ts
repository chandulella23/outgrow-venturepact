import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-home',
  templateUrl: './pricing-home.component.html',
  styleUrls: ['./pricing-home.component.css']
})
export class PricingHomeComponent implements OnInit {

  constructor(router:Router, title:Title) { 
    title.setTitle("Pricing | Outgrow");
  }

  ngOnInit() {
  }

}
