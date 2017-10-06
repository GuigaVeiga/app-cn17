import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestMethod } from '@angular/http';
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
                this.showAlert('Obrigado', 'Sua pergunta foi enviada com sucesso');
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

    /*
    send(recipient: string, subject: string, message: string) {
        var requestHeaders = new Headers();
        requestHeaders.append('Authorization', 'Basic key-703c0d7fa5f96ea0d4a75223be6c159c');
        requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post(new Request({
            method: RequestMethod.Post,
            url: 'https://api.mailgun.net/v3/cidadeviva.space/messages',
            body: {
                from: 'redenuvem@cidadeviva.space',
                to: 'redenuvem@cidadeviva.org',
                subject: 'Mesa Redonda',
                text:pedido,
            headers: requestHeaders
        })).subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }
    */
    sendPedidoOracao(pedido: string)
    {
        return this.http.post('http://cidadeviva.space/api/v1/usuario/mesa-redonda', {
            evento_id: 1,
            pedido: pedido
        });
    }
}
