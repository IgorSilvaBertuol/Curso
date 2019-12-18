import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos-guards';
import { AlunosDeactivate } from '../guards/alunos-desativado';
import { AlunoResolve } from './guards/aluno-guard-resolve';

const alunosRoutes=[
    {path:'', component: AlunosComponent,
    canActivateChild:[AlunosGuard],
    children:[
        {path:'novo', component: AlunoFormComponent},
        {path:':id', component: AlunoDetalheComponent, resolve:{aluno: AlunoResolve}},
        {path:':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivate]}
        
    ]},
    



];

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})


export class AlunosRoutingModule{

}