import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexHomeComponent } from './index-home/index-home.component';

import { routing } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [IndexHomeComponent]
})
export class HomeModule { }
