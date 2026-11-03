import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Login } from '../../models/login';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {
  private _router = inject(Router)

  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: EmpleadosService,
  ){}

  verificarLogin(): boolean {
    let token = sessionStorage.getItem("TOKEN");
    console.log("verificarLogin(): token: ", token);

    if(token)
      return true;

    else 
      return false;
  }

  async logInEmpleado(): Promise<void>{
    let userName = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName, password);

    let response = await this._service.logInEmpleadoAsync(login);

    this.mensaje = "Ya estas dentro, a jugar";
    
    sessionStorage.setItem("TOKEN", response.response);
    this._cdr.detectChanges();
    // this._router.navigate(['/subordinados']);
  }

  cerrarSesion() {
    sessionStorage.removeItem("TOKEN");
    this.mensaje = "Sesion cerrada";
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    
  }
}
