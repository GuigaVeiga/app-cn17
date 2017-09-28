import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    AuthService,
  ]
})
export class LoginPageModule {}
