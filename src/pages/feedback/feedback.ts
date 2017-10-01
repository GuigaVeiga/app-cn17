import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
    feedback: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private http: HttpService,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FeedbackPage');
    }
  
    enviar() {
        const loading = this.loadingCtrl.create({
            content: 'Enviando, aguarde...'
        });
        loading.present();
        this.sendFeedback(this.feedback)
            .subscribe(res => {
                this.showAlert('Obrigado', 'Sua mensagem foi recebida com sucesso');
                this.feedback = '';
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
    
    sendFeedback(feedback: string) {
        return this.http.post('http://cidadeviva.space/api/v1/usuario/feedback', {
            evento_id: 1,
            feedback: feedback
        });
    }
}
