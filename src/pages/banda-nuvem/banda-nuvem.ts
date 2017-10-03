import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandasPage } from "../bandas/bandas";

@IonicPage()
@Component({
  selector: 'page-banda-nuvem',
  templateUrl: 'banda-nuvem.html',
})
export class BandaNuvemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToPage(){
    this.navCtrl.push(BandasPage);
  }

}
