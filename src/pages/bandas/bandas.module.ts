import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandasPage } from './bandas';

@NgModule({
  declarations: [
    BandasPage,
  ],
  imports: [
    IonicPageModule.forChild(BandasPage),
  ],
})
export class BandasPageModule {}
