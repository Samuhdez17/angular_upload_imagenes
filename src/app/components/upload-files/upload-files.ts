import { Component } from '@angular/core';
import { FileService } from '../../services/files.service';
import { FileModel } from '../../models/file';

@Component({
  selector: 'app-upload-files',
  standalone: false,
  styleUrl: './upload-files.css',
  templateUrl: './upload-files.html',
})

export class UploadFiles {
  files!: Array<FileModel>

  constructor(
    private _fileService: FileService,
  ) {}

  subir(): void {
    this._fileService.postFiles(this.files)
  }
}
