import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';

const routes: Routes = [
  { path: '', component: PricingHomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
