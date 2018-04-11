import { Component, OnInit } from '@angular/core';
import { VideoUrlService } from '../../../shared/services/video-url.service'

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {
  
  constructor(private videoURLService:VideoUrlService,title:Title) { 
  
      title.setTitle("Interactive Calculators and Quizzes | Outgrow");
      
  
  }
  

  ngOnInit() {
  }
  videoURL(type,frame){
    this.videoURLService.videoURL(type,frame);
  }
}
