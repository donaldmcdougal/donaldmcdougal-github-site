import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NorthwindClientRoutingModule } from './northwind-client-routing.module';
import { NorthwindClientComponent } from './northwind-client.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NorthwindClientRoutingModule
  ],
  declarations: [NorthwindClientComponent]
})
export class NorthwindClientModule { }
