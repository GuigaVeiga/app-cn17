import { Injectable } from '@angular/core';
import { Http, RequestOptions, ConnectionBackend } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class HttpService extends Http {
    constructor(
        _backend: ConnectionBackend,
        _defaultOptions: RequestOptions,
        private authService: AuthService
    ) {
        super(_backend, _defaultOptions);

        if (this.authService.usuario)
            this._defaultOptions.headers.append('Authorization', `Bearer ${this.authService.usuario.access_token}`);
    }

}
