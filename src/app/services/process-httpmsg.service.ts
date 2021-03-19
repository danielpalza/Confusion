import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  //Maneja un tipo HttpErrorResponse que sea enviado por el catch de algun proceso
  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;
    //si el error es del tipo ErrorEvent, si carga.
    if (error.error instanceof ErrorEvent) {
      errMsg = error.error.message;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errMsg);
  }
}
