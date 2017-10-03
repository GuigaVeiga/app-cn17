import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandaNuvemPage } from "../banda-nuvem/banda-nuvem";
import { BandaSaronPage } from "../banda-saron/banda-saron";
import { BandaBarukPage } from "../banda-baruk/banda-baruk";
import { BandaNemerPage } from "../banda-nemer/banda-nemer";

@IonicPage()
@Component({
  selector: 'page-bandas',
  templateUrl: 'bandas.html',
})
export class BandasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goTopageNuvem(){
    this.navCtrl.push(BandaNuvemPage);
  }

  goTopageSaron(){
    this.navCtrl.push(BandaSaronPage);
  }

  goTopageNemer(){
    this.navCtrl.push(BandaNemerPage);
  }

  goTopageBaruk(){
    this.navCtrl.push(BandaBarukPage);
  }

}
