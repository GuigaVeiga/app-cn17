import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook } from '@ionic-native/facebook';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from "../pages/intro/intro.module";
import { LoginPageModule } from "../pages/login/login.module";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { ProgramacaoPage } from "../pages/programacao/programacao";
import { PalestrantesPage } from "../pages/palestrantes/palestrantes";
import { BandasPage } from "../pages/bandas/bandas";
import { MapaTeatroPage } from "../pages/mapa-teatro/mapa-teatro";
import { ComidaPage } from "../pages/comida/comida";
import { LojaPage } from "../pages/loja/loja";
import { FeedbackPage } from "../pages/feedback/feedback";
import { LocalPage } from "../pages/local/local";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramacaoPage,
    PalestrantesPage,
    BandasPage,
    MapaTeatroPage,
    ComidaPage,
    LojaPage,
    FeedbackPage,
    LocalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    LoginPageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramacaoPage,
    PalestrantesPage,
    BandasPage,
    MapaTeatroPage,
    ComidaPage,
    LojaPage,
    FeedbackPage,
    LocalPage
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
