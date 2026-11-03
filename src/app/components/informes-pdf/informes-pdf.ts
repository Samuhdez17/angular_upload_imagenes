import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf',
  standalone: false,
  styleUrl: './informes-pdf.css',
  templateUrl: './informes-pdf.html',
})
export class InformesPdf {
  generarPDF() {
    let doc = new jsPDF();

    doc.setFontSize(16)
    doc.text('Informe de ejemplo', 10, 20);
    doc.setFontSize(12)

    // INFO DE LA TABLA
    const headers = ['Nombre', 'Edad', 'Ciudad']
    const data = [
      ['Juan Pérez', '30', 'Madrid'],
      ['María López', '25', 'Barcelona'],
      ['Pedro García', '35', 'Valencia'],
    ]

    // GENERAR TABLA
    autoTable(doc, {
      head: [headers],
      body: data,
      startY: 30,
    })

    doc.save('informe.pdf')
  }
}
