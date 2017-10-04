import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PalestrantesPage } from "../palestrantes/palestrantes";


@IonicPage()
@Component({
  selector: 'page-eixo-esperanca',
  templateUrl: 'eixo-esperanca.html',
})
export class EixoEsperancaPage {
  shownGroup = null;
  
    palestrantes: Array<{ nome: string, subtitulo: string, sobre: string, img: string, icon: string, 
      showDetails: boolean }> = [];
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
  
      this.palestrantes = [
        {
          nome: "Sérgio Queiroz",
          subtitulo:"Presidente e Líder do Sistema Cidade Viva",
          sobre: "Sérgio Queiroz, mais conhecido como pastor Sérgio, é presidente e líder do Sistema Cidade Viva, que trabalha com a dignificação do ser humano; Bacharel em Engenharia Civil, Direito e Teologia. Mestre em Teologia e em Filosofia. Doutor em Ministério pela Trinity University; Procurador da Fazenda Nacional; Pensador, Escritor e Cristão Reformado.",
          img: "assets/img/sergio-queiroz.png",
         icon: "ios-arrow-forward",
          showDetails: false
        },
        {
          nome: "Thiago Dutra",
          subtitulo:"Pastor da Rede Nuvem",
          sobre: "Pastor da Rede Nuvem e Diretor de Educação da Fundação Cidade Viva; Bacharel em Direito e Teologia, Mestre em Direitos Humanos e em Gestão de Organizações Aprendentes. Marido de Dayane e pai da Bella.",
          img: "assets/img/thiago-dutra.png",
         icon: "ios-arrow-forward",
          showDetails: false
        }
      ]
    }
  
    ionViewDidLoad() {
    }
  
    toggleGroup(palestrantes) {
      if (palestrantes.showDetails) {
            palestrantes.showDetails = false;
            palestrantes.icon = 'ios-arrow-forward';
      } else {
        palestrantes.showDetails = true;
        palestrantes.icon = 'ios-arrow-down';
      }
    }

    goToPage(){
      this.navCtrl.push(PalestrantesPage);
    }
    
  
  }
  