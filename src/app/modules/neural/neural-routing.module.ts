import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeuralComponent } from './neural.component';

const routes: Routes = [
  {
    path: '',
    component: NeuralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeuralRoutingModule { }
