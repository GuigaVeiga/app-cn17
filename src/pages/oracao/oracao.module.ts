import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OracaoPage } from './oracao';

@NgModule({
  declarations: [
    OracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(OracaoPage),
  ],
})
export class OracaoPageModule {}
