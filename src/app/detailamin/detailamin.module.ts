import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailaminPageRoutingModule } from './detailamin-routing.module';

import { DetailaminPage } from './detailamin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailaminPageRoutingModule
  ],
  declarations: [DetailaminPage]
})
export class DetailaminPageModule {}
