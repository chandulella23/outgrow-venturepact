import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoUrlService} from "./video-url.service";
import { RouterModule } from '@angular/router';
import { routes } from './site.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    VideoUrlService
  ],
  declarations: []
})
export class SiteModule { }
