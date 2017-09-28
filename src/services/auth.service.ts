import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from "../models/user";
import { Profile } from "../models/profile";
import 'rxjs/add/operator/map';


// http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial
@Injectable()
export class AuthService {
    public usuario: any;

    constructor(private http: Http) {
        let data = localStorage.getItem('cn17_data');
        if (data)
            this.usuario = JSON.parse(data);
    }

    autenticar(credenciais: User): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post('http://cidadeviva.space/api/login', credenciais)
                .map((res: Response) => res.json())
                .subscribe(res => {
                    localStorage.setItem('cn17_data', JSON.stringify(res));
                    resolve(res);
                }, err => {
                    reject(JSON.parse(err.text()));
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

            this.http.post('http://cidadeviva.space/api/cadastrar', params)
                .map((res: Response) => res.json())
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(JSON.parse(err.text()));
                });
        });
    }

    sair(): void {
        this.usuario = null;
        localStorage.removeItem('cn17_data');
    }
}
