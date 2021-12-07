import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailaminPage } from './detailamin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailaminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailaminPageRoutingModule {}
