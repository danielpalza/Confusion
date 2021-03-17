import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

//importamos el servicio
import { DishService } from '../services/dish.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent implements OnInit {

  //Creamos un array de objetos dish
  dishes: Dish[];

  

  //creamos una instancia del servicio DishService para usarlo apenas se cree el componente.
  // se injecta baseUrl del provider, para que se tenga ese valor cada vez que se inicia, mas lo que
  //se agregue en el html
  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }
   
  //Se llama y se asigna el valor retornado del servicio a la variable "dishes" apenas se crea el componente.
  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes= dishes)
  }
    /*Este metodo podra ser accedido mediante los eventos puestos en el elemento html
 onSelect(dish:Dish){
    this.selectedDish=dish;
  }*/

}
