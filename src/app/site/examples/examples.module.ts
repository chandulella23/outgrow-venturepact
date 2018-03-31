import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesHomeComponent } from './examples-home/examples-home.component';
import { routing } from './examples.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],

  declarations: [ExamplesHomeComponent]
})
export class ExamplesModule { }
