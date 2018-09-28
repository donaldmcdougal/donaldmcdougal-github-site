import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NorthwindBackendRoutingModule } from './northwind-backend-routing.module';
import { NorthwindBackendComponent } from './northwind-backend.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NorthwindBackendRoutingModule
  ],
  declarations: [NorthwindBackendComponent]
})
export class NorthwindBackendModule { }
