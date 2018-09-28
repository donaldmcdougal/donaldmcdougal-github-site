import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NorthwindClientComponent } from './northwind-client.component';

const routes: Routes = [
  {
    path: '',
    component: NorthwindClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NorthwindClientRoutingModule { }
