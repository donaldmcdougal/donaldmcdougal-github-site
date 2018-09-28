import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NorthwindBackendComponent } from './northwind-backend.component';

const routes: Routes = [
  {
    path: '',
    component: NorthwindBackendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NorthwindBackendRoutingModule { }
