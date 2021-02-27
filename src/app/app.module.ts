import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importo los paquetes instalados
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importa el componente toolbar de material angular
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
//Importa el componente lista de material angular
import { MatListModule } from '@angular/material/list';




import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

/*
  Se deben instalar estos paquetes usar angular materials, animaciones.
  npm install @angular/material@6.4.7 --save
  npm install @angular/cdk@6.4.7 --save
  npm install --save @angular/animations@6.1.7
  npm install --save hammerjs@2.0.8

  Flex layout para Angular
  npm install --save @angular/flex-layout@6.0.0-beta.18
*/

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    //Los importo para poder usarlos en este componentes y en los demas
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
