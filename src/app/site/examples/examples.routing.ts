import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesHomeComponent } from './examples-home/examples-home.component'

const routes: Routes = [
  { path: '', component: ExamplesHomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
