import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterBackendComponent } from './starter-backend.component';

const routes: Routes = [
  {
    path: '',
    component: StarterBackendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterBackendRoutingModule { }
