import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../shared/dish';
import { DishService } from '../../services/dish.service';

// Params y ActivatedRoute permiten usar los parametros pasados a travez de la url
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//Permite cambiar de parametro de un observable
import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // @input permite usar los parametros pasados en la declaracion del componente en el html padre
  //@Input()
  dish:Dish;

  dishIds: string[];
  prev: string;
  next: string;

  //Se instancian los objetos de los servicios
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {

    this.dishservice.getDishIds()
      .subscribe(dishIds =>{
       
        this.dishIds = dishIds});
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
  

  

}
