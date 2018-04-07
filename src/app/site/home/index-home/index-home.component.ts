import { Component, OnInit } from '@angular/core';
import { VideoUrlService } from '../../../shared/services/video-url.service';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {
  
  constructor(private videoURLService:VideoUrlService) { }

  ngOnInit() {
  }
  videoURL(type,frame){
    this.videoURLService.videoURL(type,frame);
  }
}


