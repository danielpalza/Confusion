import { Component, OnInit, ViewChild } from '@angular/core';

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

  //Se toma el valor del form que se estara validando
  @ViewChild('fform') feedbackFormDirective;


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
  // el array muestra primero el valor inicial, y segundo el metodo para validarlo, hay varios
  //metodos
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  //Accion que se realizara al clickear el boton submit del formulario
  //El reset reestablecera los datos iniciales al resetear
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }
  

}
