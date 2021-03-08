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
  //devuelve una promesa resuelta
  getDishes(): Promise<Dish[]> {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES),2000);
    });
  }

  getDish(id: number): Promise<Dish> {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES.filter((dish) => (parseInt(dish.id) === id))[0]),2000);
    });
    

  }

  getFeaturedDish(): Promise<Dish> {

    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES.filter((dish) => dish.featured)[0]),2000);
    });
    
  }
}
