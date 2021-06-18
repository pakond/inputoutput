import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  variableInput: string = '';
  variableOutput: string;

  constructor() {}

  nuevoEvento( dato: string ): void {
    // recibe el evento del componente hijo y lo asigna a la variable
    this.variableOutput = dato;
  }

}
