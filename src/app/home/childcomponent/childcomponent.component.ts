import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss'],
})
export class ChildcomponentComponent implements OnInit {

  variableOutput: string = ''

  // utilizo el decorador @Input para recibir los datos del componente padre
  @Input() variableInput: string;

  // utilizo el decorador @Output para enviar datos al componente padre
  @Output() nuevoEvento = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  enviarEvento() {
    // emite un evento al componente padre con lo escrito en el input
    this.nuevoEvento.emit( this.variableOutput );
  }

}
