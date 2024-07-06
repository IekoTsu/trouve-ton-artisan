import { Component, Input } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseModalComponent } from '../response-modal/response-modal.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ResponseModalComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() artisanMail : any

  message: string = '';
  loading: boolean = false;
  mailStatus: string = '';
  fieldOk : boolean = true;
  showModal : boolean = false;

  emailData = {
    name: '',
    from : '',
    to : '',
    subject : '',
    body : '' 
  }

  emptyFields: { name: boolean; from: boolean; subject: boolean; body: boolean } = {
    name: false,
    from: false,
    subject: false,
    body: false
  };

  constructor(private emailService : EmailService) {  }

  sendEmail() {
    this.checkFields()
    if (this.fieldOk){
      this.showModal = true
      this.emailData.to = this.artisanMail
      this.loading = true; // Start loading state
      this.message = ''; // Clear previous messages

      this.emailService.sendEmail(this.emailData).subscribe({
      next: response => {
        this.mailStatus = 'ok';
        this.message = response.message;
        this.loading = false; // Stop loading state
      },
      error: error => {
        this.mailStatus = 'error'
        this.message = `Erreur lors de l'envoi de l'e-mail: ${error.message}`;
        this.loading = false; // Stop loading state
      }
    })
    }else{
      this.shakeAnimation()
    }
  }

  checkFields(){
    this.emptyFields = {
      name: this.emailData.name?.replace(/\s+/g, '') === '',
      from: this.emailData.from?.replace(/\s+/g, '') === '',
      subject: this.emailData.subject?.replace(/\s+/g, '') === '',
      body: this.emailData.body?.replace(/\s+/g, '') === ''
    };

    this.fieldOk = !(this.emptyFields.name || this.emptyFields.from || this.emptyFields.subject || this.emptyFields.body)
  }

  shakeAnimation(){
    setTimeout(()=>{
      let errorMessage = document.getElementById('error')
      if (errorMessage){
      errorMessage.classList.add('shake')
      setTimeout(() => {
        errorMessage.classList.remove('shake')
      }, 250)
    }
    }, 1)
  }

  closeModal(){
    this.showModal = false;
  }

}
