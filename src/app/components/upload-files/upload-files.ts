import { ChangeDetectorRef, Component } from '@angular/core';
import { FileService } from '../../services/files.service';
import { FileModel } from '../../models/file_model';

@Component({
  selector: 'app-upload-files',
  standalone: false,
  styleUrl: './upload-files.css',
  templateUrl: './upload-files.html',
})

export class UploadFiles {
  files: Array<FileModel> = []

  constructor(
    private _fileService: FileService,
    private _cdr: ChangeDetectorRef,
  ) {}

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    Array.from(input.files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        // reader.result = "data:image/png;base64,AAAA..."
        const base64 = reader.result as string;

        this.files.push(new FileModel(file.name, base64));
      };

      reader.readAsDataURL(file);
    });

    input.value = ''; // permite volver a elegir el mismo archivo
  }

  async subir() {
    try {
      await this._fileService.postFiles(this.files);

    } catch (error) {
      throw (error)
    }
  }
}
