import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';
import { routing } from './pricing.routing';
import { PricingFaqComponent } from './pricing-faq/pricing-faq.component';
import { PricingPlansComponent } from './pricing-plans/pricing-plans.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PricingHomeComponent, PricingFaqComponent, PricingPlansComponent]
})
export class PricingModule { }
