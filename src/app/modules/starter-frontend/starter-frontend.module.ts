import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterFrontendRoutingModule } from './starter-frontend-routing.module';
import { StarterFrontendComponent } from './starter-frontend.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StarterFrontendRoutingModule
  ],
  declarations: [StarterFrontendComponent]
})
export class StarterFrontendModule { }
