import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompressionComponent } from './compression.component';

const routes: Routes = [
  {
    path: '',
    component: CompressionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompressionRoutingModule { }
