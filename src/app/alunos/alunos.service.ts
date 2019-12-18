import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: Aluno[] = [
    {id:1, nome:'Aluno01', email: 'Aluno01@email.com'},
    {id:2, nome:'Aluno02', email: 'Aluno02@email.com'},
    {id:3, nome:'Aluno03', email: 'Aluno03@email.com'},


  ]
  
  getAlunos(){
      return this.alunos;
  }
  getAluno(id: number){
    let alunos = this.getAlunos();
    for(let i=0; i<alunos.length; i++){
      let aluno = alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
      return false;
  }
  constructor() { }
}
