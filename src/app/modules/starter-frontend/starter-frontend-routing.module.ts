import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterFrontendComponent } from './starter-frontend.component';

const routes: Routes = [
  {
    path: '',
    component: StarterFrontendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterFrontendRoutingModule { }
