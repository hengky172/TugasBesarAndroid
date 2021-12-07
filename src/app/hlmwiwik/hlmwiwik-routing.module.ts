import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HlmwiwikPage } from './hlmwiwik.page';

const routes: Routes = [
  {
    path: '',
    component: HlmwiwikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HlmwiwikPageRoutingModule {}
