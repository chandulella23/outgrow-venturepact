import { Component, OnInit } from '@angular/core';
import { VideoUrlService } from '../../video-url.service';

@Component({
  selector: 'app-examples-home',
  templateUrl: './examples-home.component.html',
  styleUrls: ['./examples-home.component.css']
})
export class ExamplesHomeComponent implements OnInit {

  constructor(private videoURLService:VideoUrlService) { }

  ngOnInit() {
  }
  videoURL(type,frame){
    this.videoURLService.videoURL(type,frame);
  }
}
