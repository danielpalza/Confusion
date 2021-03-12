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
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider'; 





import 'hammerjs';

// Importo componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './menu/dishdetail/dishdetail.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

// Services
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from "./services/leader.service";

//Importo esto para poder usar las rutas que cree
import { AppRoutingModule } from './app-routing/app-routing.module';


//Manejo de formularios template-driven y reactive
import { FormsModule } from '@angular/forms'; 
//Manejo de formularios reactive
import { ReactiveFormsModule } from '@angular/forms';




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
  //Los componentes creados se importan y agregan automaticamente aqui.
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
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
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  //Los servicios van en "providers".
  providers: [DishService, PromotionService, LeaderService],
  bootstrap: [AppComponent],
  // entryComponents muestra los componentes que usaran un Dialog
  entryComponents: [
    LoginComponent
],
})
export class AppModule { }
