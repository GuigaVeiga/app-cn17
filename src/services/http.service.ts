import { Injectable } from '@angular/core';
import {
    Http,
    RequestOptions,
    ConnectionBackend,
    RequestOptionsArgs,
    Request,
    Response,
    Headers
} from '@angular/http';
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
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        options = new RequestOptions();
        if (this.authService.usuario) {
            options.headers = new Headers();
            options.headers.append('Authorization', `Bearer ${this.authService.usuario.access_token}`);
        }

        console.log('HttpService.request', this.authService.usuario.access_token);

        return super.post(url, body, options);
    }

}
