import { Component, HostListener, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import { PdfService } from '../../../../services/pdf.service';
@Component({
  selector: 'app-content-ebook',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './content-ebook.component.html',
  styleUrl: './content-ebook.component.scss'
})
export class ContentEbookComponent {
  #PdfService = inject(PdfService);

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  async sendEmail() {
    if (this.emailForm.valid) {
      this.loadingDialog();
      emailjs.init("qX0tN42jVdIRTG6jx");
      await emailjs.send("service_qvee2tc", "template_br6urhm", {
        from_name: this.emailForm.value.email,
        message: `O ${this.emailForm.value.email} ficou interessando pelo e-book e já efetuou o download!`,
      });
      this.emailForm.reset();
    }
  }

  loadingDialog() {
    let timerInterval: any;
    Swal.fire({
      title: "Enviando Solicitação",
      html: "Carregando em <b></b> milissegundos",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup()!.querySelector("b");
        timerInterval = setInterval(() => {
          timer!.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        this.successDialog();
      }
    });
  }

  successDialog() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "E-mail enviado com sucesso!",
      showConfirmButton: true,
      confirmButtonText: "Download"
    }).then((result) => {
      if (result.isConfirmed) {
        this.downloadPdf();
      }
    });
  }

  downloadPdf() {
    this.#PdfService.downloadPdf().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Programador-De-Sucesso.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
