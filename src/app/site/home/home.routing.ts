import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexHomeComponent } from './index-home/index-home.component'

const routes: Routes = [
  { path: '', component: IndexHomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
