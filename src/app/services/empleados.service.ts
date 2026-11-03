import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { environment } from "../../environments/environment.development";
import { firstValueFrom, Observable } from "rxjs";
import { Empleado } from "../models/empleado";
import { SKIP_TOKEN } from "../utils/token.context";

@Injectable()
export class EmpleadosService {
    url = environment.apiEmpleados;
    constructor(private _http: HttpClient) {}
    
    async logInEmpleadoAsync(user: Login): Promise<any> {
        let request = "auth/login";
        let json = JSON.stringify(user);
        let header = new HttpHeaders().set("content-type", "application/json");

        return firstValueFrom(
            this._http.post(this.url + request, json, {
                context: new HttpContext().set(SKIP_TOKEN, true),
                headers: header,
            })
        )
    }

    async getPerfilEmpleadoAsync(): Promise<Empleado>{
        let request = "api/empleados/perfilempleado";

        return firstValueFrom(
            this._http.get<Empleado>(this.url + request)
        )
    }

    async getSubordinadosAsync(): Promise<Empleado[]>{
        let request = "api/empleados/subordinados";
        
        return firstValueFrom(
            this._http.get<Empleado[]>(this.url + request)
        )
    }
}