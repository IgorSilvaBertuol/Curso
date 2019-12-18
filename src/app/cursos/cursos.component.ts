import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[];
  pagina: number;
  inscricao: Subscription;
  constructor(private cursoService: CursosService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    this.inscricao =  this.route.queryParams.subscribe(
      (params: any)=>{
        this.pagina = params['pagina'];
      }
    )
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
    
  }
  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}});
  }

}
