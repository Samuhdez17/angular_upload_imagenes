import { Component } from '@angular/core';
import { FileService } from '../../services/files.service';

@Component({
  selector: 'app-upload-files',
  standalone: false,
  styleUrl: './upload-files.css',
  templateUrl: './upload-files.html',
})

export class UploadFiles {
  constructor(
    private _fileService: FileService,
  ) {}

  
}
