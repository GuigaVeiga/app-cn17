import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EixoFePage } from "../eixo-fe/eixo-fe";
import { EixoAmorPage } from "../eixo-amor/eixo-amor";
import { EixoEsperancaPage } from "../eixo-esperanca/eixo-esperanca";

/**
 * Generated class for the PalestrantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-palestrantes',
  templateUrl: 'palestrantes.html',
})
export class PalestrantesPage {
  palestrantes: Array<{nome: string, sobre: string, img: string}>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.palestrantes = [
      
      { nome:"Felipe Vilela", 
        sobre:"Felipe é Rapper, Escritor e Coordenador do Missão África, que contribui de forma diferenciada para o desenvolvimento do ser humano em sua totalidade, promovendo justiça social; Pastor no Ministério MEVAM, que realiza missões evangelísticas em Itajaí-SC, mas já está em Países como Estados Unidos, nos continentes Europeu e Africano.", 
        img:"assets/img/felipe-vilela.jpg"
      },
      { nome:"Guilherme Schelb", 
        sobre:"Guilherme Schelb é Procurador Regional da República, Mestre em Direito Constitucional e especialista em Segurança Pública. Ele atuou em investigações criminais na Europa, Estados Unidos e América do Sul. Foi responsável pelo combate ao crime organizado e à corrupção em órgãos públicos federais em ações de repercussão nacional e internacional. Guilherme é idealizador do Programa Proteger: Programa Nacional de Prevenção da Violência e Criminalidade Infanto-Juvenil e palestrante sobre Estratégias para a Prevenção da Violência em escolas, universidades, hospitais, polícias civil e militar, igrejas e empresas.", 
        img:"assets/img/guilherme-schelb.jpg"
      },
      { nome:"Marcos Botelho", 
        sobre:"Criador e professor do curso modular chamado ministerial com juventude, missionário da Missão Jovens da Verdade, fundador do Ministério Terra dos Palhaços Brasil. Pastor de jovens e adolescentes da IPALPHA, colunista no blog Ultimato e Pastor da - sim, ele também - Rock no Vale. Marcos vai falar sobre a importância de um ministério de jovens saudáveis que ama e sai das quatro paredes e alcança a cidade.", 
        img:"assets/img/marcos-botelho.png"
      },
      { nome:"Rafael Diedrich", 
        sobre:"Rafael é produtor, cantor, artista dedicado à educação e ama a integração entre a criatividade e a espiritualidade no meio educacional. É líder do Renasentido (projeto super legal que remixa músicas da harpa cristã). Não sei se você já está o reconhecendo, mas ele é o responsável por aquele super evento que acontece todos os anos em São Paulo. Isso mesmo, o Rock no Vale!", 
        img:"assets/img/rafael-diedrich.jpg"
      },
      { nome:"Mauricio Cunha", 
        sobre:"Fundador do CADI, Assessor da Aliança Evangélica Brasileira para o tema “Igreja e Políticas Públicas” e Conselheiro Nacional de Assistência Social (CNAS). Mauricio é Mestre em Antropologia Social pela Universidade Federal do Paraná; é Professor Universitário com especialização em Gestão de Sistemas e Serviços de Saúde; atuou na área de Gestão Pública como Secretário Municipal de Saúde, Ação Social e Governo nos municípios Fazenda Rio Grande e Campo Largo (PR); foi Diretor Nacional de Programas da Visão Mundial para o Brasil.", 
        img:"assets/img/mauricio-cunha.jpg"
      }
        // { nome:"", 
        //   sobre:"", 
        //   img:""
        // }    
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PalestrantesPage');
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
