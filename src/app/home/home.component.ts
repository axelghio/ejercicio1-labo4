import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'ejercicio1';

  public EdadUno:string = '';
  public EdadDos:string = '';
  public ResultadoSuma:string = '';
  public ResultadoPromedio:string = '';
  
  constructor(public router:Router) { }

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


  Login()
  {
    this.router.navigate(['/login']);
  }
}