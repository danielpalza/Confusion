import { Injectable } from '@angular/core';
//importamos las clases y la constante para proveerlas cuando se pidan.
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//RxJs nos permite usar observables, similares a promises
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  //se provee los datos, mas tarde se podra cambiar por una llamada a un servicio
  //devuelve una promesa resuelta
  getDishes(): Observable<Dish[]> {
    //Con observables, con un delay de 2s
    return of(DISHES).pipe(delay(2000))
    //return of(DISHES).pipe(delay(2000)).toPromise(); retorna el observable convertido a promises

    //Con promises
   /* return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES),2000);
    });*/
  }

  getDish(id: number): Observable<Dish> {
    return  of(DISHES.filter((dish) => (parseInt(dish.id) === id))[0]).pipe(delay(2000));

  }

  getFeaturedDish():Observable<Dish> {

    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
     
  }
}
