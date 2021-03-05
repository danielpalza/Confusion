import { Component, OnInit } from '@angular/core';
//Se necesita importar MatDialog y MatDialogRef para abrir o cerrar un Dialog en algun componente
import { MatDialog, MatDialogRef } from '@angular/material';
//Se importa tambien el componente que se usara en el dialog
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLoginForm(){
    // al metodo open de un MatDialog se le pasa el componente que abrira, y tambien unas medidas opcionales
    // de la ventana.
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'})
  }

}
