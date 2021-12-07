import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlmaminPage } from './hlmamin.page';

const routes: Routes = [
  {
    path: '',
    component: HlmaminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlmaminPageRoutingModule {}
