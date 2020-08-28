import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1';

  public EdadUno:string = '';
  public EdadDos:string = '';
  public ResultadoSuma:string = '';
  public ResultadoPromedio:string = '';
  
  
  constructor() { }

  ngOnInit()
  {

  }

  CalcularPromedio()
  {
    this.ResultadoSuma = (parseFloat(this.EdadUno) + parseFloat(this.EdadDos)).toString();
    this.ResultadoPromedio = (parseFloat(this.ResultadoSuma) / 2).toString();
  }



  BorrarCuadros()
  {
    this.EdadUno = '';
    this.EdadDos = '';
    this.ResultadoPromedio = '';
    this.ResultadoSuma = '';
  }
}
