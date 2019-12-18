import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivate } from '../guards/alunos-desativado';
import { AlunoResolve } from './guards/aluno-guard-resolve';

@NgModule({
    declarations: [
        AlunosComponent,
         AlunoFormComponent,
          AlunoDetalheComponent
        ],
    imports: [ 
        FormsModule,
        CommonModule, 
        AlunosRoutingModule,
     ],
    exports: [],
    providers: [AlunosService, AlunosDeactivate, AlunoResolve],
})
export class AlunosModule {}