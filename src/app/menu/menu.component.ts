import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent implements OnInit {

  //Creamos un array de objetos dish
  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  constructor() { }
   
  ngOnInit() {
   
  }
   //Este metodo podra ser accedido mediante los eventos puestos en el elemento html
  onSelect(dish:Dish){
    this.selectedDish=dish;
  }

}
