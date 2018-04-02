import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexHomeComponent } from './index-home/index-home.component';

import { RouterModule } from '@angular/router';
import { routes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexHomeComponent]
})
export class HomeModule { }
