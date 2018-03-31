import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhyInteractiveHomeComponent } from './why-interactive-home/why-interactive-home.component'

const routes: Routes = [
  { path: '', component: WhyInteractiveHomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
