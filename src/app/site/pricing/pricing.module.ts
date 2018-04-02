import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';

import { RouterModule } from '@angular/router';
import { routes } from './pricing.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PricingHomeComponent]
})
export class PricingModule { }
