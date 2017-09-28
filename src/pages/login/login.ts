import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { HomePage } from "../home/home";
import { Profile } from "../../models/profile";
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    loginCadasro: string = "cadastro";
    isAndroid: boolean = false;

    user = {} as User;
    profile = {} as Profile;

    constructor(
        private auth: AuthService,
        public navCtrl: NavController,
        public navParams: NavParams,
        public platform: Platform,
        private toastCtrl: ToastController
    ) { }

    async login(user: User) {
        this.auth.autenticar(user).then(res => {
            this.navCtrl.setRoot(HomePage);
        }, err => {
            if (err.error === 'UNKNOWN_USERNAME' || err.error === 'WRONG_PASSWORD') {
                this.showToast(err.message);
            } else {
                this.showToast('Ops, não foi possível realizar a autenticação, tente novamente mais tarde');
                console.error(err);
            }
        });
    }

    loginFacebook() { }

    async registrar(user: User, profile: Profile) {
        this.auth.cadastrar(user, profile).then(res => {
            this.navCtrl.setRoot('LoginPage');
        }, err => {
            if (err.error) {
                this.showToast(err.message);
            } else {
                this.showToast('Ops, não foi possível realizar o cadastro, tente novamente mais tarde');
                console.error(err);
            }
        });
    }

    showToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    }
}
