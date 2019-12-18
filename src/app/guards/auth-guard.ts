import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificaAcesso()
  }

private verificaAcesso(){
  if (this.authService.usuarioEstaAutenticado()) {
    return true;
    }

    this.router.navigate(['/login']);
    return false;
}
    canLoad(
      route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
      return this.verificaAcesso();
    }
  
  
}
