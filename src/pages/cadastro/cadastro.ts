import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams) {}

  async registrar(user: User) {
    try {
      const results = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
      console.log(results);
      if (results) {
        this.navCtrl.setRoot('LoginPage');
      }
    } catch (e) {
      console.error(e);
    }
  }
}
