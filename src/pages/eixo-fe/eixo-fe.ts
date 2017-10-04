import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PalestrantesPage } from "../palestrantes/palestrantes";


@IonicPage()
@Component({
  selector: 'page-eixo-fe',
  templateUrl: 'eixo-fe.html',
})
export class EixoFePage {
  shownGroup = null;

  palestrantes: Array<{ nome: string, subtitulo: string, sobre: string, img: string, icon: string, 
    showDetails: boolean }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.palestrantes = [
      {
        nome: "Alex Dias Ribeiro",
        subtitulo:"Dirigente da Organização Atletas de Cristo",
        sobre: "Alexi Dias é um ex-piloto brasileiro de Fórmula 1. Ele dirige a organização Atletas de Cristo, que reúne mais de 7.500 atletas de diversas modalidades. Nas Olimpíadas de 1988 e Copas do Mundo da Itália 90, USA 94, França 98 e Coreia /Japão 02, ele atuou como capelão dos atletas cristãos da Seleção Brasileira. Palestrante, radialista e escritor, Alex tem três best sellers publicados. Um deles foi traduzido para o inglês, espanhol e árabe, e outro ganhou o prêmio ABEC de melhor biografia do ano, totalizando 80.000 livros vendidos.",
        img: "assets/img/alex-dias.png",
        icon: "ios-arrow-forward",
        showDetails: false
      },
      {
        nome: "Carlos Bezerra Jr.",
        subtitulo:"Presidente da Comissão de Direitos Humanos da Assembleia Legislativa do Estado de São Paulo",
        sobre: "Carlos Bezerra Jr. é médico, deputado estadual pelo PSDB-SP, presidente da Comissão de Direitos Humanos da Assembleia Legislativa do Estado de São Paulo e filho do pastor, conferencista, escritor e fundador da Comunidade da Graça, Carlos Alberto de Quadros Bezerra. Carlos Bezerra Jr. é ainda o idealizador do Usina 21 - Jovens, Idéias e Transformação Social, um dos principais eventos voltados à juventude evangélica no País, que ocorre anualmente e discute a participação dos jovens na sociedade.",
        img: "assets/img/carlos-bezerra.png",
        icon: "ios-arrow-forward",
        showDetails: false
      },
      {
        nome: "Marcos Botelho",
        subtitulo:"Pastor do festival Rock no Vale",
        sobre: "Missionário da Missão Jovens da Verdade e da SEPAL (Servindo Pastores e Líderes). Fundador e líder do ministério JV na Estrada que trabalha em congressos e acampamentos com recreação, teatro e preleção. Criador e professor do curso modular chamado Ministério com Juventude, livre e pós-graduação, realizado no seminário do JV/FLAM desde 2006. Fundador do ministério Terra dos Palhaços Brasil vinculado ao JV e a MPC. Pastor de Jovens e adolescentes da ipalpha e escreve na Ultimato, blog cristão. Ah, ele também é pastor da Rock no Vale, junto com Rafael Diedrich.",
        img: "assets/img/marcos-botelho.png",
        icon: "ios-arrow-forward",
        showDetails: false
      },
      {
        nome: "Yago Martins",
        subtitulo:"Criador do canal Dois Dedos de Teologia",
        sobre: "Yago Martins é bacharel em Teologia pela Faculdade Teológica Sul-Americana (Londrina/PR), pós-graduando em Escola Austríaca de Economia pelo Centro Universitário Ítalo Brasileiro, em parceria com o Instituto Ludwig von Mises Brasil (São Paulo/SP) e estudante do Sacrae Theologiae Magister (Th.M) em Teologia Sistemática do Instituto Aubrey Clark (Fortaleza/CE).",
        img: "assets/img/yago-martins.png",
        icon: "ios-arrow-forward",
        showDetails: false
      },
    ]
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
