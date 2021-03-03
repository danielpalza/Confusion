import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importo los paquetes instalados
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importa el componente toolbar de material angular
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
//Importa el componente lista de material angular
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';




import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './menu/dishdetail/dishdetail.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

// Services
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';

//Importo esto para poder usar las rutas que cree
import { AppRoutingModule } from './app-routing/app-routing.module';


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
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    //Los importo para poder usarlos en este componentes y en los demas
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [DishService, PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
