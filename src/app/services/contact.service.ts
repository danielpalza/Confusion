import { Injectable } from '@angular/core';

//importamos las clases y la constante para proveerlas cuando se pidan.
import { Feedback } from '../shared/feedback';
//RxJs nos permite usar observables, similares a promises
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// utilizamos para crear la peticion
//catchError permite capturar errores y que continue el proceso
import { map, catchError  } from 'rxjs/operators';
//Sirven para el trabajo de request, y la creacion de headers
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

//servicio para mostrar msg's de errores
import { ProcessHTTPMsgService } from './process-httpmsg.service';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    submitFeedback(feedback: Feedback): Observable<Feedback> {
      //configura el header a usar
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      //enviar un objeto Dish
      return this.http.post<Feedback>(baseURL + 'feedback/',feedback, httpOptions)
        //maneja un posible error 
        .pipe(catchError(this.processHTTPMsgService.handleError));
  
    }
}
