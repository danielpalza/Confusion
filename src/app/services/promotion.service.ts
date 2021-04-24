import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';

import { map, catchError  } from 'rxjs/operators';
//Sirven para el trabajo de request, y la creacion de headers
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

//servicio para mostrar msg's de errores
import { ProcessHTTPMsgService } from './process-httpmsg.service';


//RxJs nos permite usar observables, similares a promises
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
             .pipe(catchError(this.processHTTPMsgService.handleError));
    
  }
  //Retorna un Observable
  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/'+ id)
             .pipe(catchError(this.processHTTPMsgService.handleError));  
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
    .pipe(map(promotion => promotion[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}