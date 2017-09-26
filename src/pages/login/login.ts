import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Facebook } from '@ionic-native/facebook';
import { User } from "../../models/user";
import { HomePage } from "../home/home";
import firebase from 'firebase'; 
import { Profile } from "../../models/profile";

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

  constructor(private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private facebook: Facebook,
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform) {}


  async login(user: User) {
    try {
      const results = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
      if (results) {
        this.navCtrl.setRoot(HomePage);
      }
    } catch (e) {
      console.error(e);
    }
  }

  loginFacebook() {
    this.facebook.login(["email"]).then((loginResponse) => {
      let credencial = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

      firebase.auth().signInWithCredential(credencial).then((info) => {
        alert(JSON.stringify(info));
      })
    })

  }
  async registrar(user: User) {
    try {
      const results = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
      console.log(results);
      if (results) {
        this.salvarProfile();
        this.navCtrl.setRoot('LoginPage');
      }
    } catch (e) {
      console.error(e);
    }
  }

  salvarProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`usuarios/${auth.uid}`).set(this.profile);
    })
  }

} 