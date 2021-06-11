import { Injectable } from "@angular/core";
import { Leader } from "../shared/leader";
import { LEADERS } from "../shared/leaders";

// utilizamos para crear la peticion
//catchError permite capturar errores y que continue el proceso
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
export class LeaderService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getLeaders(): Promise<Leader[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }
  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(LEADERS.filter((Leader) => Leader.featured == true)[0]);
      }, 2000);
    });
  }

  /*getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true')
    .pipe(map(leader => leader[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));

  
  }*/
}
