import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
    apiFiles = environment.apiFIles

    constructor(
        private _http: HttpClient,
    ) {}

    async postFiles(file: File) {
        const url = this.apiFiles
        const request = '/api/testingfiles/'

        return this._http.post(url + request, file)
    }
}