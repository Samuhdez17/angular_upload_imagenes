import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipos.service';
import { EquipoModel } from '../../models/equipo_model';

@Component({
  selector: 'app-equipos',
  standalone: false,
  styleUrl: './equipos.css',
  templateUrl: './equipos.html',
})
export class Equipos implements OnInit {
  equipos!: Array<EquipoModel>

  constructor(
    private _service: EquipoService,
    private _cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    this.equipos = await this._service.getEquipos();
    this._cdr.detectChanges();
  }
}
