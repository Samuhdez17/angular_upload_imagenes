import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { UploadFiles } from './components/upload-files/upload-files';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'upload', component: UploadFiles },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
