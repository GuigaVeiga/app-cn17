import { Injectable } from '@angular/core';
import { Http, RequestOptions, ConnectionBackend, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class HttpService extends Http {
    constructor(
        _backend: ConnectionBackend,
        _defaultOptions: RequestOptions,
        private authService: AuthService
    ) {
        super(_backend, _defaultOptions);

        console.log('HttpService.constructor', this.authService.usuario);
        if (this.authService.usuario)
            this._defaultOptions.headers.append('Authorization', `Bearer ${this.authService.usuario.access_token}`);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        // console.log('HttpService.post', this.authService.usuario, this._defaultOptions.headers);
        return super.post(url, body, options);
    }

}
