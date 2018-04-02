import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



export const routes: Routes = [
  
  
  { path: '', loadChildren: './site/site.module#SiteModule' },
  
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);