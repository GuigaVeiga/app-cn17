import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-eixo-fe',
  templateUrl: 'eixo-fe.html',
})
export class EixoFePage {
  shownGroup = null;

  palestrantes: Array<{ nome: string, sobre: string, img: string, icon: string, showDetails: boolean }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.palestrantes = [
      {
        nome: "Yago Martins",
        sobre: "Yago Martins é bacharel em Teologia pela Faculdade Teológica Sul-Americana (Londrina/PR), pós-graduando em Escola Austríaca de Economia pelo Centro Universitário Ítalo Brasileiro, em parceria com o Instituto Ludwig von Mises Brasil (São Paulo/SP) e estudante do Sacrae Theologiae Magister (Th.M) em Teologia Sistemática do Instituto Aubrey Clark (Fortaleza/CE).",
        img: "assets/img/yago-martins.jpg",
        icon: "ios-add-circle-outline",
        showDetails: false
      },

      {
        nome: "Rafael Diedrich",
        sobre: "Rafael é produtor, cantor, artista dedicado à educação e ama a integração entre a criatividade e a espiritualidade no meio educacional. É líder do Renasentido (projeto super legal que remixa músicas da harpa cristã). Não sei se você já está o reconhecendo, mas ele é o responsável por aquele super evento que acontece todos os anos em São Paulo. Isso mesmo, o Rock no Vale!",
        img: "assets/img/rafael-diedrich.jpg",
        icon: "ios-add-circle-outline",
        showDetails: false
      },
    ]
  }

  ionViewDidLoad() {
  }

  toggleGroup(palestrantes) {
    if (palestrantes.showDetails) {
          palestrantes.showDetails = false;
    } else {
      palestrantes.showDetails = true;
      palestrantes.icon = 'ios-remove-circle-outline';
    }
  }
  

}
