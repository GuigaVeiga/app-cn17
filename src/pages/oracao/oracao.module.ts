import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OracaoPage } from './oracao';
import { HttpModule } from '@angular/http';
import { HttpService } from '../../services/http.service';

@NgModule({
  declarations: [
    OracaoPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(OracaoPage),
  ],
  providers: [
    HttpService
  ]
})
export class OracaoPageModule {}
