import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

//importamos el servicio
import { DishService } from '../services/dish.service';

import { flyInOut, expand } from '../animations/app.animations';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  //establece el valor de flyInOut como true, cuando el componente es enrutado
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations:[
    flyInOut(),
    expand()
  ]
})



export class MenuComponent implements OnInit {

  //Creamos un array de objetos dish
  dishes: Dish[];
  errMess: string;


  

  //creamos una instancia del servicio DishService para usarlo apenas se cree el componente.
  // se injecta baseUrl del provider, para que se tenga ese valor cada vez que se inicia, mas lo que
  //se agregue en el html
  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }
   
  //Se llama y se asigna el valor retornado del servicio a la variable "dishes" apenas se crea el componente.
    //se asigna el valor del error, del tipo que sea, a la variable "errmess"
    //en el primer lugar de suscribe va el metodo a ejecutar si la operacion va bien, en el segundo
    //si la operacion falla.
  ngOnInit() {
    this.dishService.getDishes()
      .then(dishes => this.dishes= dishes,
        errmess => this.errMess = <any>errmess);
  }
    /*Este metodo podra ser accedido mediante los eventos puestos en el elemento html
 onSelect(dish:Dish){
    this.selectedDish=dish;
  }*/

}
