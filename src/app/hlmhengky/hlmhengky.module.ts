import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlmhengkyPageRoutingModule } from './hlmhengky-routing.module';

import { HlmhengkyPage } from './hlmhengky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlmhengkyPageRoutingModule
  ],
  declarations: [HlmhengkyPage]
})
export class HlmhengkyPageModule {}
