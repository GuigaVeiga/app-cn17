import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
  ],
  providers: [
    AuthService,
  ]
})
export class IntroPageModule {}
