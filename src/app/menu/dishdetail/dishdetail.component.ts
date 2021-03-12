import { Component, OnInit, Input , ViewChild } from '@angular/core';
import { Dish } from '../../shared/dish';
import { DishService } from '../../services/dish.service';

// Params y ActivatedRoute permiten usar los parametros pasados a travez de la url
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//Permite cambiar de parametro de un observable
import { switchMap } from 'rxjs/operators';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../../shared/feedback';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // @input permite usar los parametros pasados en la declaracion del componente en el html padre
  //@Input()
  @ViewChild('fform') feedbackFormDirective;


  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  buttonDisabled:boolean=true;

  dish:Dish;

  dishIds: string[];
  prev: string;
  next: string;

  
  //Un objeto que contiene los errores presentes en el atributo
  formErrors = {
    'author': '',
    'comment': '',
    
  };

  //Un objeto que contiene los errores y su tipo, de su determinado atributo
  validationMessages = {
    'author': {
      'required':      'Author is required.',
      'minlength':     'Author name must be at least 2 characters long.',
      
    },
    "comment": {
      'required':      'The comment is required.',
      'minlength':     'The comment must be at least 2 characters long.',
      
    }
    
  };

  //Se instancian los objetos de los servicios
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location, private fb: FormBuilder) { 
      this.createForm();

    }

  ngOnInit() {

    this.dishservice.getDishIds()
      .subscribe(dishIds =>{this.dishIds = dishIds});
    this.route.params
      .pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { 
        
        
        this.dish = dish; this.setPrevNext(dish.id); });
    // de route, se toma el parametro que se paso como /:id
    /*const id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id)
      .subscribe(dish => this.dish = dish)*/
      // para promises .then(dish => this.dish = dish)
  }
  //Al usar Location, se puede pedir volver al elemento anterior en el historial al que estamos, volver a la
  //anterior pagina
  goBack(): void { 
    //cambio
    this.location.back();
  }


  //Funcion para cambiar actualizar indice de platos
  setPrevNext(dishId: string) {
 
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  //FORM

  //Crea un objeto de formBuilder, que contenga los elementos que queremos 
  //ingresar en el formulario, y se guarda en el objeto de FormGroup, feedbackForm
  // el array muestra primero el valor inicial, y segundo el metodo para validarlo, hay varios
  //metodos
  createForm(): void {
    //cada validator representa un tipo de control, todos deben estar encerrados en un array
    this.feedbackForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)] ],
      rating: ['5'],
      comment: ['', [Validators.required, Validators.minLength(1)] ]
    });

    // Chequea si hay valores cambiados gracias al observer valueChanges,
    //si los hay, ejecuta onValueChanged
    this.feedbackForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  //Accion que se realizara al clickear el boton submit del formulario
  //El reset reestablecera los datos iniciales al resetear
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    //toISOString formatea la fecha a un string mas amigable.
    this.dish.comments.push({...this.feedbackForm.value, date: new Date().toISOString()})
    //Resetea el formulario
    this.feedbackForm.reset({
      author: '',
      comment: '',
      rating: '5'
    });
    this.feedbackFormDirective.resetForm();


  }
  //Chequea si el atributo fue modificado, y si no es valido, cargara los errores 
  //correspondientes
  onValueChanged(data?: any) {
    
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    this.buttonDisabled= form.status==="INVALID"?true:false;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
             
              
          }
        }
      }
    }
  }
  }
  

  


