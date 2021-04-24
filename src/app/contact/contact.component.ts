import { Component, OnInit, ViewChild } from "@angular/core";

//FormBuilder permite crear un objeto que contenga los datos del formulario
//y manejarlo directamente.
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Feedback, ContactType } from "../shared/feedback";

import { flyInOut, visibility, expand } from "../animations/app.animations";

import { ContactService } from "../services/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  host: {
    "[@flyInOut]": "true",
    style: "display: block;",
  },
  animations: [flyInOut(), visibility(), expand()],
})
export class ContactComponent implements OnInit {
  //Se toma el valor del form que se estara validando
  @ViewChild("fform") feedbackFormDirective;

  errMess: String;
  spin: boolean = false;
  submited: boolean = false;
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  visibility = "shown";

  //Un objeto que contiene los errores presentes en el atributo
  formErrors = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
  };

  //Un objeto que contiene los errores y su tipo, de su determinado atributo
  validationMessages = {
    firstname: {
      required: "First Name is required.",
      minlength: "First Name must be at least 2 characters long.",
      maxlength: "FirstName cannot be more than 25 characters long.",
    },
    lastname: {
      required: "Last Name is required.",
      minlength: "Last Name must be at least 2 characters long.",
      maxlength: "Last Name cannot be more than 25 characters long.",
    },
    telnum: {
      required: "Tel. number is required.",
      pattern: "Tel. number must contain only numbers.",
    },
    email: {
      required: "Email is required.",
      email: "Email not in valid format.",
    },
  };

  constructor(private fb: FormBuilder, private contactservice: ContactService) {
    this.createForm();
  }

  ngOnInit() {}

  //Crea un objeto de formBuilder, que contenga los elementos que queremos
  //ingresar en el formulario, y se guarda en el objeto de FormGroup, feedbackForm
  // el array muestra primero el valor inicial, y segundo el metodo para validarlo, hay varios
  //metodos
  createForm(): void {
    //cada validator representa un tipo de control, todos deben estar encerrados en un array
    this.feedbackForm = this.fb.group({
      firstname: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      lastname: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      telnum: ["", [Validators.required, Validators.pattern]],
      email: ["", [Validators.required, Validators.email]],
      agree: false,
      contacttype: "None",
      message: "",
    });

    //Chequea si hay valores cambiados gracias al observer valueChanges,
    //si los hay, ejecuta onValueChanged
    this.feedbackForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  }

  //Accion que se realizara al clickear el boton submit del formulario
  //El reset reestablecera los datos iniciales al resetear
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.spin = true;
    this.visibility = "hidden";

    this.contactservice.submitFeedback(this.feedback).subscribe(
      (feedbackform) => {
        this.spin = false;
        this.submited = true;

        setInterval(() => {
          this.submited = false;
          this.visibility = "shown";
        }, 5000);
      },
      (errmess) => (this.errMess = <any>errmess)
    );
    this.feedbackForm.reset({
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contacttype: "None",
      message: "",
    });
    this.feedbackFormDirective.resetForm();
  }
  //Chequea si el atributo fue modificado, y si no es valido, cargara los errores
  //correspondientes
  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  }
}
