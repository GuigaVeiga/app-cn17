import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EixoFePage } from "../eixo-fe/eixo-fe";
import { EixoAmorPage } from "../eixo-amor/eixo-amor";
import { EixoEsperancaPage } from "../eixo-esperanca/eixo-esperanca";


@IonicPage()
@Component({
  selector: 'page-palestrantes',
  templateUrl: 'palestrantes.html',
})
export class PalestrantesPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
  }

  goEixoFe(){
    this.navCtrl.push(EixoFePage);
  }

  goEixoAmor(){
    this.navCtrl.push(EixoAmorPage);
  }

  goEixoEsperanca(){
    this.navCtrl.push(EixoEsperancaPage);
  }

}
