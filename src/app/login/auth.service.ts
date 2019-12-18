import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado:boolean = false;
  mostrarMenu = new EventEmitter<boolean>(); 

  constructor(private router: Router) { }

fazerLogin( usuario: Usuario){
  if (usuario.nome === 'usuario@email.com' && usuario.senha === '1234'){
    this.usuarioAutenticado = true;
    this.mostrarMenu.emit(true);
    this.router.navigate(['/']);
  }else{
    this.mostrarMenu.emit(false)
  this.usuarioAutenticado = false;
  }
}
usuarioEstaAutenticado(){
  return this.usuarioAutenticado;
}
} 
