import { Component } from '@angular/core';
import { FileService } from '../../services/files.service';

@Component({
  selector: 'app-upload-files',
  standalone: false,
  styleUrl: './upload-files.css',
  templateUrl: './upload-files.html',
})

export class UploadFiles {
  files!: Array<File>

  constructor(
    private _fileService: FileService,
  ) {}

  subir(): void {
    this._fileService.postFiles(this.files)
  }

  async onFilesSelected(event: Event): Promise<void> {
  const input = event.target as HTMLInputElement;
  if (!input.files?.length) 
    return;
  
  const content = Array.from(input.files ?? []);

  this.files = await Promise.all(
    content.map(async (f) => new File(f.name, await this.archivoABase64(f)))
  );

  input.value = ''; // permite volver a elegir el mismo archivo
  }

  private archivoABase64(archivo: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const resultado = reader.result as string;
        resolve(resultado.split(',')[1]);
      };

      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(archivo);
    });
  }
}
