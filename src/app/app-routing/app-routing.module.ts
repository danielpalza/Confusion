import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importo RouterModule, para darle las rutas a Angular
import { RouterModule, Routes } from '@angular/router';

//importo las rutas que cree para configurarlas como tal
import { routes } from './routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
