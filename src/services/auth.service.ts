import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from "../models/user";
import { Profile } from "../models/profile";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


// http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial
@Injectable()
export class AuthService {
    public usuario: any;
    public onChange: Function;

    constructor(private http: Http, private storage: Storage) {
        this.storage.get('cn17_data').then(data => {
            console.log('AuthService', data);
            if (data) {
                this.usuario = JSON.parse(data);
                if (this.onChange) this.onChange();
            }
        });
    }

    entrar(credenciais: User): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post('http://cidadeviva.space/api/v1/usuario/entrar', credenciais)
                .map((res: Response) => res.json())
                .subscribe(res => {
                    this.onChange = null;
                    this.storage.set('cn17_data', JSON.stringify(res));
                    resolve(res);
                }, err => {
                    try {
                        reject(JSON.parse(err.text()));
                    } catch(e) {
                        reject(err.text());
                    }
                });
        });
    }

    cadastrar(user: User, profile: Profile): Promise<any> {
        return new Promise((resolve, reject) => {
            let params = {
                usuario: user.usuario,
                senha: user.senha,
                email: user.email,
                nome_completo: profile.nome
            };

            this.http.post('http://cidadeviva.space/api/v1/usuario/cadastrar', params)
                .map((res: Response) => res.json())
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    try {
                        reject(JSON.parse(err.text()));
                    } catch(e) {
                        reject(err.text());
                    }
                });
        });
    }

    sair(): void {
        this.usuario = null;
        this.storage.remove('cn17_data');
    }
}
