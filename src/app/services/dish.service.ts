import { Injectable } from '@angular/core';
//importamos las clases y la constante para proveerlas cuando se pidan.
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //se provee los datos, mas tarde se podra cambiar por una llamada a un servicio
  getDishes(): Dish[] {
    return DISHES;
  }
}
