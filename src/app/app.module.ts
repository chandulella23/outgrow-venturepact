import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { PrivacyComponent } from './shared/layouts/footer/privacy/privacy.component';
import { TermsComponent } from './shared/layouts/footer/terms/terms.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrivacyComponent,
    TermsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
