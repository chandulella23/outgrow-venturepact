import { Injectable } from '@angular/core';

@Injectable()
export class VideoUrlService {

  constructor() { }
  public videoURL(type,frame){
    if(type == "a"){
      // this.video = document.getElementById("frame1");
      console.log(frame.src);
      frame.src="http://website.outgrow.us/build-a-startup?vHeight=1";

    }
    else if(type == "b"){
      frame.src="http://website.outgrow.us/Which-engineering-major-is-right-for-you?vHeight=1";
    }
    else if(type == "c"){
      frame.src="http://website.outgrow.us/Cost-of-a-video-campaign-4?vHeight=1";
    }
    else if(type == "d"){
      frame.src="http://website.outgrow.us/What-is-your-risk-of-getting-a-heart-disease?vHeight=1";
    }
    else if(type == "e"){
      frame.src="http://website.outgrow.us/outgrow-roi?vHeight=1";
    }
    else if(type == "f"){
      frame.src="http://website.outgrow.us/build-an-app?vHeight=1";
    }
  }
}
