import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';
import { routing } from './pricing.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PricingHomeComponent]
})
export class PricingModule { }
