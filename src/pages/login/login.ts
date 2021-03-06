import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { User } from "../../models/user";
import { HomePage } from "../home/home";
import { Profile } from "../../models/profile";
import { AuthService } from '../../services/auth.service';
import { LoadingController } from 'ionic-angular';
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
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController
    ) { }

    async login(user: User) {
        const loading = this.loadingCtrl.create({
            content: 'Autenticando, aguarde...'
        });
        loading.present();

        this.auth.entrar(user).then(res => {
            loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }, err => {
            loading.dismiss();
            if (err.code === 'ERROR') {
                this.showAlert(err.message);
            } else {
                this.showAlert('Ops, não foi possível realizar a autenticação, tente novamente mais tarde');
                console.error(err);
            }
        });
    }

    loginFacebook() { }

    async registrar(user: User, profile: Profile) {
        const loading = this.loadingCtrl.create({
            content: 'Cadastrando, aguarde...'
        });
        loading.present();

        this.auth.cadastrar(user, profile).then(res => {
            this.navCtrl.setRoot('LoginPage');
            this.showAlertConfirm();
            loading.dismiss();
        }, err => {
            loading.dismiss();
            if (err.code === 'ERROR') {
                this.showAlert(err.message);
            } else {
                this.showAlert('Ops, não foi possível realizar o cadastro, tente novamente mais tarde');
                console.error(err);
            }
        });
    }

    showAlert(message: string): void {
        let alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    showAlertConfirm(): void {
        let alert = this.alertCtrl.create({
            title: 'Cadastro Realizado com Sucesso',
            buttons: ['OK']
        });
        alert.present();
    }
}
