import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../menu/dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

// los path con un /:parametro sirven para pasar parametros a travez de la url al componente
export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',  component: MenuComponent },
  { path: 'dishdetail/:id', component: DishdetailComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];