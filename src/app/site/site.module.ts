import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './site.routing';
import { VideoUrlService } from './video-url.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers:[
    VideoUrlService
  ],
  declarations: []
})
export class SiteModule { }
