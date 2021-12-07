import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailhengkyPage } from './detailhengky.page';

const routes: Routes = [
  {
    path: '',
    component: DetailhengkyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailhengkyPageRoutingModule {}
