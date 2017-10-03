import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandasPage } from "../bandas/bandas";

/**
 * Generated class for the BandaBarukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banda-baruk',
  templateUrl: 'banda-baruk.html',
})
export class BandaBarukPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToPage(){
    this.navCtrl.push(BandasPage);
  }

}
