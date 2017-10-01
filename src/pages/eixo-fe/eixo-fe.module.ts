import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EixoFePage } from './eixo-fe';

@NgModule({
  declarations: [
    EixoFePage,
  ],
  imports: [
    IonicPageModule.forChild(EixoFePage),
  ],
})
export class EixoFePageModule {}
