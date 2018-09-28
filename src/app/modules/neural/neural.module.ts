import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeuralRoutingModule } from './neural-routing.module';
import { NeuralComponent } from './neural.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NeuralRoutingModule
  ],
  declarations: [NeuralComponent]
})
export class NeuralModule { }
