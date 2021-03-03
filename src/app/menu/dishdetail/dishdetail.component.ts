import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../shared/dish';
import { DishService } from '../../services/dish.service';

// Params y ActivatedRoute permiten usar los parametros pasados a travez de la url
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // @input permite usar los parametros pasados en la declaracion del componente en el html padre
  //@Input()
  dish:Dish;

  //Se instancian los objetos de los servicios
  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // de route, se toma el parametro que se paso como /:id
    const id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id.toString());
  }
  //Al usar Location, se puede pedir volver al elemento anterior en el historial al que estamos, volver a la
  //anterior pagina
  goBack(): void {
    this.location.back();
  }

}
