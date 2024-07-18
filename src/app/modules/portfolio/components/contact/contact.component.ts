import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  })

  async sendEmail() {
    if (this.emailForm.valid) {
      emailjs.init("qX0tN42jVdIRTG6jx");
      await emailjs.send("service_qvee2tc", "template_02657x6", {
        from_name: this.emailForm.value.email,
        to_name: "kelvinamancio10@gmail.com",
        subject: this.emailForm.value.subject,
        message: this.emailForm.value.message,
      });
      this.successDialog();
      this.emailForm.reset();
    }
  }

  successDialog() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "E-mail enviado com sucesso!",
      showConfirmButton: false,
      timer: 1500
    });
  }

}
