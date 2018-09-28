import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkingRoutingModule } from './networking-routing.module';
import { NetworkingComponent } from './networking.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NetworkingRoutingModule
  ],
  declarations: [NetworkingComponent]
})
export class NetworkingModule { }
