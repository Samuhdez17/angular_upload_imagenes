import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { FileModel } from '../models/file_model';
import { firstValueFrom } from 'rxjs';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable()
export class FileService {
    apiFiles = environment.apiFIles

    constructor(
        private _http: HttpClient,
    ) {}

    async postFiles(files: FileModel): Promise<any> { // Se deberia cambiar a observable para poder actualizar el estado del boton de subir imagen
        const url = this.apiFiles
        const request = '/api/testingfiles'

        let body = JSON.stringify(files)
        let header = new HttpHeaders().set('Content-Type', 'application/json')

        return firstValueFrom(
            this._http.post(url + request, body, {
                headers: header,
                context: new HttpContext().set(SKIP_TOKEN, true),
            }),
        );
    }
}