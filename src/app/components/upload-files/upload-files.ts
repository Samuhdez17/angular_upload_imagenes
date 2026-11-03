import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FileService } from '../../services/files.service';
import { FileModel } from '../../models/file_model';

@Component({
  selector: 'app-upload-files',
  standalone: false,
  styleUrl: './upload-files.css',
  templateUrl: './upload-files.html',
})

export class UploadFiles {
  file: FileModel | null = null;

  @ViewChild('selector') selector!: ElementRef

  constructor(
    private _fileService: FileService,
    private _cdr: ChangeDetectorRef,
  ) {}

  async subir() {
    let file = this.selector.nativeElement.files[0]
    let path = this.selector.nativeElement.value.split('\\') // Nombre fichero: path[2]

    let reader = new FileReader()

    reader.onloadend = async () => {
      let buffer: ArrayBuffer
      buffer = reader.result as ArrayBuffer

      let base64: string
      base64 = btoa(new Uint8Array(buffer)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
      )

      this.file = new FileModel(path[2], base64)

      try {
        await this._fileService.postFiles(this.file)
        this.selector.nativeElement.value = ''

      } catch (error) {
        throw error
      }

    }

    reader.readAsArrayBuffer(file)

    this._cdr.detectChanges()

  }
}
