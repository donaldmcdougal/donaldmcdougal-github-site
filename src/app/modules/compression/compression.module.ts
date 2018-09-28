import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompressionRoutingModule } from './compression-routing.module';
import { CompressionComponent } from './compression.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CompressionRoutingModule
  ],
  declarations: [CompressionComponent]
})
export class CompressionModule { }
