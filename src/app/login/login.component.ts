import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user= {username:"", password:"", remember: false}

  //Se instancia un objeto MatDialogRef y se especifica el componente de dialogo al que hace
  //referencia, para que se pueda cerrar desde aqui
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('User: ', this.user);
    //esto cierra el la ventana de dialogo
    this.dialogRef.close();
  }


}
