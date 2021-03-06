import { Component, OnInit } from '@angular/core';
//FormBuilder permite crear un objeto que contenga los datos del formulario
//y manejarlo directamente.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  //Crea un objeto de formBuilder, que contenga los elementos que queremos 
  //ingresar en el formulario, y se guarda en el objeto de FormGroup, feedbackForm
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  //Accion que se realizara al clickear el boton submit del formulario
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
