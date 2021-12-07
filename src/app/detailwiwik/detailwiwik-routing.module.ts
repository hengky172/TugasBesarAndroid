import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailwiwikPage } from './detailwiwik.page';

const routes: Routes = [
  {
    path: '',
    component: DetailwiwikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailwiwikPageRoutingModule {}
