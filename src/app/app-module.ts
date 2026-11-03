import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './components/menu/menu';
import { Home } from './components/home/home';
import { UploadFiles } from './components/upload-files/upload-files';
import { FileService } from './services/files.service';
import { EquipoService } from './services/equipos.service';
import { InformesPdf } from './components/informes-pdf/informes-pdf';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error/error';
import { Equipos } from './components/equipos/equipos';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { EmpleadosService } from './services/empleados.service';
import { FormsModule } from '@angular/forms';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    Menu,
    Home,
    UploadFiles,
    InformesPdf,
    ErrorComponent,
    Equipos,
    LoginComponent,
    SubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideHttpClient(withInterceptors([authTokenInterceptor, ])),
    provideToastService(),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    FileService,
    EquipoService,
    EmpleadosService,
  ],
  bootstrap: [App],
})
export class AppModule {}
