import { Injectable } from '@angular/core';
//importamos las clases y la constante para proveerlas cuando se pidan.
import { Dish } from '../shared/dish';
//RxJs nos permite usar observables, similares a promises
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// utilizamos para crear la peticion
//catchError permite capturar errores y que continue el proceso
import { map, catchError  } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

//servicio para mostrar msg's de errores
import { ProcessHTTPMsgService } from './process-httpmsg.service';



@Injectable({
  providedIn: 'root'
})
export class DishService {
  //creamos un objeto HttpClient con el cual hacer las peticiones
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  //se provee los datos, mas tarde se podra cambiar por una llamada a un servicio
  //devuelve una promesa resuelta
  getDishes(): Observable<Dish[]> {
    //retorna un observable, usa un metodo GET, pide un array de objetos Dish
    //catchError captura eventos de error, y ejecuta processoHttpMsgService
    return this.http.get<Dish[]>(baseURL + 'dishes')
             .pipe(catchError(this.processHTTPMsgService.handleError));
    
    //Con observables, con un delay de 2s
    //return of(DISHES).pipe(delay(2000))
    //return of(DISHES).pipe(delay(2000)).toPromise(); retorna el observable convertido a promises

    //Con promises
   /* return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES),2000);
    });*/
  }


  //A veces el programa funciona sin convertir de numero a string, como la funcion de abajo, que tira
  //error pero funciona, en cambio cuando se arregla para que no tire error, no funciona.
  getDish(id: number): Observable<Dish> {
    //baseurl, dishes que es la ruta, y el id
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
                .pipe(catchError(this.processHTTPMsgService.handleError));
    
  
    /*return of(DISHES.filter((dish) => 
    
    (dish.id === id))[0]).pipe(delay(2000));*/
  }

  getFeaturedDish():Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
                .pipe(map(dishes => dishes[0]))
                .pipe(catchError(this.processHTTPMsgService.handleError));
    
 
    //return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
     
  }
  //retorna un string
  //el error se maneja por si solo, ya que no es una peticion http
  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
                .pipe(catchError(error => error));
    
 
    // return of(DISHES.map(dish => dish.id ));
  }
}
