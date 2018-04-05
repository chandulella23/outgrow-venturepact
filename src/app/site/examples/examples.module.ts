import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesHomeComponent } from './examples-home/examples-home.component';
import { routes } from './examples.routing';
import { RouterModule } from '@angular/router';
import { VideoUrlService } from '../video-url.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExamplesHomeComponent]
})
export class ExamplesModule { }
