import { Component, OnInit } from '@angular/core';
import { VideoUrlService } from '../../../shared/services/video-url.service'

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-examples-home',
  templateUrl: './examples-home.component.html',
  styleUrls: ['./examples-home.component.css']
})
export class ExamplesHomeComponent implements OnInit {


  constructor(private videoURLService:VideoUrlService,router:Router, title:Title) {
    title.setTitle("Examples | Outgrow");
   }

  ngOnInit() {
  }
  videoURL(type,frame){
    this.videoURLService.videoURL(type,frame);
  }
}
