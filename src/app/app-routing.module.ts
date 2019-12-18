import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos-guards';
import { AlunosGuard } from './guards/alunos-guards';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  {path:'cursos', 
  loadChildren: 'src/app/cursos/curso.module#CursosModule',
  canActivate:[AuthGuard],  canActivateChild:[CursosGuard], 
  canLoad:[AuthGuard],

},
  {path:'alunos', 
  loadChildren: 'src/app/alunos/alunos.module#AlunosModule',
  canActivate:[AuthGuard],
  canLoad:[AuthGuard]
},

  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate:[AuthGuard]},
  {path: '**', component:PaginaNaoEncontradaComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
