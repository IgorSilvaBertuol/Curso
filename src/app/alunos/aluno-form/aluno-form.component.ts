import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IformCanDeactive } from 'src/app/guards/Iform-canDeactive';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IformCanDeactive {
aluno: any={};
inscricao: Subscription;
private formMudou:boolean= false;
  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        let id = params['id'];

        this.aluno =  this.alunoService.getAluno(id);

        if(this.aluno === null){
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
  onInput(){
    this.formMudou = true;
  }
  podeMudarRota(){
    if (this.formMudou) {
    confirm('Tem Certeza que deseja Sair');
    }
    return true;
  }
  podeDesativar(){
    return this.podeMudarRota();
  }

}
