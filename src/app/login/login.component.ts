import { Component, OnInit } from '@angular/core';
import { Usuario} from '../Usuario';
import { UrlSerializer } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  public mostrarLogin:string;

  public user: Usuario = new Usuario();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  login(user:Usuario)
  {
    if(user.nombre == 'admin' && user.clave == 'admin')
    {
      this.router.navigate(['/home']);
    }
    else
    {
      this.router.navigate(['/error']);
    }
  }

}
