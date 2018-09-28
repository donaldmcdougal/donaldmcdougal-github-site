import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterBackendRoutingModule } from './starter-backend-routing.module';
import { StarterBackendComponent } from './starter-backend.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StarterBackendRoutingModule
  ],
  declarations: [StarterBackendComponent]
})
export class StarterBackendModule { }
