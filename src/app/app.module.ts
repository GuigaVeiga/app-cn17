import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook } from '@ionic-native/facebook';
import { HttpService } from '../services/http.service';
import { AuthService } from '../services/auth.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from "../pages/intro/intro.module";
import { LoginPageModule } from "../pages/login/login.module";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { ProgramacaoPage } from "../pages/programacao/programacao";
import { PalestrantesPage } from "../pages/palestrantes/palestrantes";
import { BandasPage } from "../pages/bandas/bandas";
import { FeedbackPage } from "../pages/feedback/feedback";
import { LocalPage } from "../pages/local/local";
import { EixoFePage } from "../pages/eixo-fe/eixo-fe";
import { EixoAmorPage } from "../pages/eixo-amor/eixo-amor";
import { EixoEsperancaPage } from "../pages/eixo-esperanca/eixo-esperanca";
import { OracaoPage } from "../pages/oracao/oracao";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramacaoPage,
    PalestrantesPage,
    BandasPage,
    FeedbackPage,
    LocalPage,
    OracaoPage,
    EixoFePage,
    EixoAmorPage,
    EixoEsperancaPage
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
    FeedbackPage,
    LocalPage,
    OracaoPage,
    EixoFePage,
    EixoAmorPage,
    EixoEsperancaPage
  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
        provide: HttpService,
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, authService: AuthService) => {
          return new HttpService(backend, defaultOptions, authService);
        },
        deps: [ XHRBackend, RequestOptions, AuthService]
      }
  ]
})
export class AppModule {}
