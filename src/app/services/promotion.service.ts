import { Injectable } from "@angular/core";
import { Promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";

import { map, catchError } from "rxjs/operators";
//Sirven para el trabajo de request, y la creacion de headers
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { baseURL } from "../shared/baseurl";

//servicio para mostrar msg's de errores
import { ProcessHTTPMsgService } from "./process-httpmsg.service";

//RxJs nos permite usar observables, similares a promises
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PromotionService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}
  /*
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

  }*/

  getPromotions(): Promise<Promotion[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }
  //Retorna un Observable
  getPromotion(id: string): Promise<Promotion> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(PROMOTIONS.filter((promotions) => promotions.id === id)[0]),
        2000
      );
    });
  }
  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            PROMOTIONS.filter((promotions) => promotions.featured === true)[0]
          ),
        2000
      );
    });
  }
}
