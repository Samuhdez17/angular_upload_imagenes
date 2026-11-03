import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { UploadFiles } from './components/upload-files/upload-files';
import { InformesPdf } from './components/informes-pdf/informes-pdf';
import { ErrorComponent } from './components/error/error';
import { Equipos } from './components/equipos/equipos';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'upload', component: UploadFiles },
  { path: 'gen_informe', component: InformesPdf },
  { path: 'equipos', component: Equipos },
  { path: 'login', component: LoginComponent },
  { path: 'subordinados', component: SubordinadosComponent },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
