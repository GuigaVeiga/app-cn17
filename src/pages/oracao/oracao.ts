import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-oracao',
    templateUrl: 'oracao.html',
})
export class OracaoPage {
    pedido: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpService,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OracaoPage');
    }

    enviar() {
        const loading = this.loadingCtrl.create({
            content: 'Enviando, aguarde...'
        });
        loading.present();
        this.sendPedidoOracao(this.pedido)
            .subscribe(res => {
                this.showAlert('A paz do Senhor', 'Sua mensagem foi recebida com sucesso e será respondida o mais rápido possível');
                this.pedido = '';
                loading.dismiss();
            }, err => {
                this.showAlert('Error', 'Lamento, mas sua mensagem não foi enviada, tente novamente mais tarde, se o problema persistir contate o suporte');
                loading.dismiss();
            });
    }
    
    showAlert(titulo: string, mensagem: string): void {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensagem,
            buttons: ['Fechar']
        });
        alert.present();
    }
    
    sendPedidoOracao(pedido: string)
    {
        return this.http.post('http://cidadeviva.space/api/v1/usuario/pedido-oracao', {
            evento_id: 1,
            pedido: pedido
        });
    }
}
