import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HlmwiwikPageRoutingModule } from './hlmwiwik-routing.module';

import { HlmwiwikPage } from './hlmwiwik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HlmwiwikPageRoutingModule
  ],
  declarations: [HlmwiwikPage]
})
export class HlmwiwikPageModule {}
