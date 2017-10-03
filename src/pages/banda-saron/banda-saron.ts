import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandasPage } from "../bandas/bandas";

/**
 * Generated class for the BandaSaronPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banda-saron',
  templateUrl: 'banda-saron.html',
})
export class BandaSaronPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandaSaronPage');
  }

  goToPage(){
    this.navCtrl.push(BandasPage);
  }

}
