import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { AuthService } from '../../services/auth.service';
import { HomePage } from "../home/home";

@IonicPage()
@Component({
    selector: 'page-intro',
    templateUrl: 'intro.html',
})
export class IntroPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private auth: AuthService
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad IntroPage');
        if (this.auth.usuario) {
            console.log('Usuário já logado, redirecionando');
            this.navCtrl.setRoot(HomePage);
        }
    }

    goToLoginPage() {
        this.navCtrl.setRoot(LoginPage); 
    }

}
