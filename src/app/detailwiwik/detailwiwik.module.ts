import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailwiwikPageRoutingModule } from './detailwiwik-routing.module';

import { DetailwiwikPage } from './detailwiwik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailwiwikPageRoutingModule
  ],
  declarations: [DetailwiwikPage]
})
export class DetailwiwikPageModule {}
