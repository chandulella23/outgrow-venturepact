import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesHomeComponent } from './features-home/features-home.component';

import { routing } from './features.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [FeaturesHomeComponent]
})
export class FeaturesModule { }
