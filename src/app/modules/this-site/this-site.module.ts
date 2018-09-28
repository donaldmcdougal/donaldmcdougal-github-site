import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThisSiteRoutingModule } from './this-site-routing.module';
import { ThisSiteComponent } from './this-site.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ThisSiteRoutingModule
  ],
  declarations: [ThisSiteComponent]
})
export class ThisSiteModule { }
