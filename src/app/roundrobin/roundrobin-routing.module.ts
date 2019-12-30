import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoundrobinContainerComponent } from './roundrobin-container/roundrobin-container.component'
const routes: Routes = [
  {
    path: '',
    component: RoundrobinContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoundrobinRoutingModule { }
