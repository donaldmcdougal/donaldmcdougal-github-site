import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './crypto.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CryptoRoutingModule
  ],
  declarations: [CryptoComponent]
})
export class CryptoModule { }
