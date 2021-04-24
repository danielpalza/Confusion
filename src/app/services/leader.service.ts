import { Injectable } from '@angular/core';
import { Leader } from "../shared/leader";


// utilizamos para crear la peticion
//catchError permite capturar errores y que continue el proceso
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
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership')
             .pipe(catchError(this.processHTTPMsgService.handleError));
    

  
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true')
    .pipe(map(leader => leader[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));

  
  }
}
