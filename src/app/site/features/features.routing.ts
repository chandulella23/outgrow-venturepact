import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesHomeComponent } from './features-home/features-home.component'

const routes: Routes = [
  { path: '', component: FeaturesHomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
