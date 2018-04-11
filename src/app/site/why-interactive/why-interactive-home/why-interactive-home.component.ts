import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-why-interactive-home',
  templateUrl: './why-interactive-home.component.html',
  styleUrls: ['./why-interactive-home.component.css']
})
export class WhyInteractiveHomeComponent implements OnInit {

  constructor(router:Router, title:Title) {
    title.setTitle("Why Interactive Content ? | Outgrow");
   }

  ngOnInit() {
  }

}
