import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PalestrantesPage } from "../palestrantes/palestrantes";


@IonicPage()
@Component({
  selector: 'page-eixo-amor',
  templateUrl: 'eixo-amor.html',
})
export class EixoAmorPage {

  shownGroup = null;
  palestrantes: Array<{ nome: string, subtitulo: string, sobre: string, img: string, icon: string, 
      showDetails: boolean }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.palestrantes = [
      {
        nome: "Maurício Cunha",
        subtitulo:"Fundador do Projeto CADI",
        sobre: "Fundador do CADI, Assessor da Aliança Evangélica Brasileira para o tema “Igreja e Políticas Públicas”, Conselheiro Nacional de Assistência Social (CNAS). Mauricio é Mestre em Antropologia Social pela Universidade Federal do Paraná; é Professor Universitário com especialização em Gestão de Sistemas e Serviços de Saúde; atuou na área de Gestão Pública como Secretário Municipal de Saúde, Ação Social e Governo nos municípios Fazenda Rio Grande e Campo Largo (PR); foi Diretor Nacional de Programas da Visão Mundial para o Brasil; é Coach de empreendedores sociais e coautor dos livros: “O Reino entre nós – Transformação de Comunidades pelo Evangelho Integral” e “Cosmovisão Cristã e Transformação”.",
        img: "assets/img/mauricio-cunha.png",
        icon: "ios-arrow-forward",
        showDetails: false
      },
      {
        nome: "Felipe Vilela",
        subtitulo:"Rapper e Coordenador do Missão na África",
        sobre: "Felipe é Rapper, Escritor e Coordenador do Missão África, que contribui de forma diferenciada para o desenvolvimento do ser humano em sua totalidade, promovendo justiça social; Pastor no Ministério MEVAM, que realiza missões evangelísticas em Itajaí-SC, mas já está em Países como Estados Unidos, nos continentes Europeu e Africano. Felipe é casado com Josi, pai de Estevão, Deborah e Isabel. Felipe vai nos falar sobre missão, restauração de vida e amor.",
        img: "assets/img/felipe-vilela.png",
        icon: "ios-arrow-forward",
        showDetails: false
      },
      {
        nome: "Guilherme Schelb",
        subtitulo:"Idealizador do Programa Proteger",
        sobre: "Procurador Regional da República, Mestre em Direito Constitucional e especialista em Segurança Pública. Atuou em investigações criminais na Europa, Estados Unidos e América do Sul. Foi responsável pelo combate ao crime organizado e à corrupção em órgãos públicos federais em ações de repercussão nacional e internacional. Guilherme é idealizador do Programa Proteger – Programa Nacional de Prevenção da Violência e Criminalidade Infanto-Juvenil (www.programaproteger.com). É palestrante sobre Estratégias para a Prevenção da Violência em escolas, universidades, hospitais, polícias civil e militar, igrejas e empresas. É autor do livro “Violência e criminalidade infanto-juvenil” e também da coleção em quadrinhos “Crianças e Adolescentes” que orienta profissionais e pais a prevenir a violência infanto-juvenil.",
        img: "assets/img/guilherme-schelb.png",
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
