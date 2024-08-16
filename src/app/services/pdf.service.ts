import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  http = inject(HttpClient);
  #pdfUrl = 'assets/archive/Programador-de-Sucesso.pdf';

  downloadPdf(): Observable<Blob> {
    return this.http.get(this.#pdfUrl, { responseType: 'blob' });
  }
}
