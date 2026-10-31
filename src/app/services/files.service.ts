import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { FileModel } from '../models/file_model';

@Injectable()
export class FileService {
    apiFiles = environment.apiFIles

    constructor(
        private _http: HttpClient,
    ) {}

    async postFiles(files: FileModel[]): Promise<any> {
        const url = this.apiFiles
        const request = '/api/testingfiles/'

        let body = JSON.stringify(files)

        return this._http.post(url + request, body)
    }
}