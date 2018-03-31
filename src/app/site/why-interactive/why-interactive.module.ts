import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyInteractiveHomeComponent } from './why-interactive-home/why-interactive-home.component';
import { routing } from './why-interactive.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [WhyInteractiveHomeComponent]
})
export class WhyInteractiveModule { }
