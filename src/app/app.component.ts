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
import { AuthService } from '../services/auth.service';
import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: String = "IntroPage";

    pages: Array<{title: string, component: any, icon: string}>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        private authService: AuthService
    ) {
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

    initializeApp(): void {
        this.platform.ready().then(() => {
            let funcaoRetorno = (data) => {
               console.log('Notificações: ' + JSON.stringify(data));
            };
            
            if (window['plugins'] && window["plugins"].OneSignal) {
                window['plugins'].OneSignal
                    .startInit('676ee2c6-f112-496c-967d-34333c5ea2e4', '858973603020')
                    .handleNotificationOpened(funcaoRetorno)
                    .endInit();
            }
        });
    }

    openPage(page): void {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    sair(): void {
        this.authService.sair();
        this.nav.setRoot(IntroPage);
    }
}
