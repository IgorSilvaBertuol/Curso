import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IformCanDeactive } from './Iform-canDeactive';

@Injectable()
export class AlunosDeactivate implements CanDeactivate<IformCanDeactive> {
    canDeactivate(
        component: IformCanDeactive,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

         return   component.podeDesativar();
    }
}