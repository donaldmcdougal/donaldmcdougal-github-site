import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetadataRoutingModule } from './metadata-routing.module';
import { MetadataComponent } from './metadata.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MetadataRoutingModule
  ],
  declarations: [MetadataComponent]
})
export class MetadataModule { }
