import { HttpClient, HttpContext } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { EquipoModel } from '../models/equipo_model';
import { firstValueFrom } from 'rxjs';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable()
export class EquipoService {

    constructor(
        private _http: HttpClient,
    ) {}

    async getEquipos(): Promise<EquipoModel[]> {
        const url = `${environment.apiEquipos}/api/equipos`

        return firstValueFrom(this._http.get<EquipoModel[]>(url, {
            context: new HttpContext().set(SKIP_TOKEN, true)
        }))
    }
}