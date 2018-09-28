import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { UtilsComponent } from './utils.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UtilsRoutingModule
  ],
  declarations: [UtilsComponent]
})
export class UtilsModule { }
