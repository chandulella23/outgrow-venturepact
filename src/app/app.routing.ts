
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './shared/layouts/footer/privacy/privacy.component';
import { TermsComponent } from './shared/layouts/footer/terms/terms.component';

export const routes: Routes = [
  
  
  { path: '', loadChildren: './site/site.module#SiteModule' },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'tos', component: TermsComponent },  
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);