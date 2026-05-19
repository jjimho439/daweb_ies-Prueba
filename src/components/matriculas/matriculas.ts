import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';

@Component({
  selector: 'app-matriculas',
  imports: [CommonModule, RouterLink],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.css',
})
export class Matriculas {

  matriculas: Matricula[] = [];
    
    constructor(
      private matriculaService: MatriculaService
    ){};
  
    ngOnInit(): void {
      this.matriculaService.getMatriculas().subscribe(data => {
        this.matriculas = data;
      })
    }

}
