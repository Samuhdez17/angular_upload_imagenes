import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './components/menu/menu';
import { Home } from './components/home/home';
import { UploadFiles } from './components/upload-files/upload-files';
import { FileService } from './services/files.service';

@NgModule({
  declarations: [App, Menu, Home, UploadFiles],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(), FileService],
  bootstrap: [App],
})
export class AppModule {}
