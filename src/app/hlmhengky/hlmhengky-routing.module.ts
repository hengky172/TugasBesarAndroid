import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlmhengkyPage } from './hlmhengky.page';

const routes: Routes = [
  {
    path: '',
    component: HlmhengkyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlmhengkyPageRoutingModule {}
