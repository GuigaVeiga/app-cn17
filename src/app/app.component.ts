import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProgramacaoPage } from "../pages/programacao/programacao";
import { PalestrantesPage } from "../pages/palestrantes/palestrantes";
import { BandasPage } from "../pages/bandas/bandas";
import { FeedbackPage } from "../pages/feedback/feedback";
import { OracaoPage } from "../pages/oracao/oracao";
import { LocalPage } from "../pages/local/local";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: String = "IntroPage";

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Menus para navegação do evento
    this.pages = [
      { title: 'Sobre a CN17', component: HomePage, icon: "cloud" },
      { title: 'Programação', component: ProgramacaoPage, icon: "paper" },
      { title: 'Palestrantes', component: PalestrantesPage, icon: "mic" },
      { title: 'Atrações', component: BandasPage, icon: "people" },
      { title: 'Como chegar', component: LocalPage, icon: "pin" },
      { title: 'Oração', component: OracaoPage, icon: "cloud-upload" },
      { title: 'Feedback', component: FeedbackPage, icon: "thumbs-up" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
