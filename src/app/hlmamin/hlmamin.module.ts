import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlmaminPageRoutingModule } from './hlmamin-routing.module';

import { HlmaminPage } from './hlmamin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlmaminPageRoutingModule
  ],
  declarations: [HlmaminPage]
})
export class HlmaminPageModule {}
