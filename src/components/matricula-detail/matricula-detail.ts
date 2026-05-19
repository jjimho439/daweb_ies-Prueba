import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';

@Component({
  selector: 'app-matricula-detail',
  imports: [RouterLink],
  templateUrl: './matricula-detail.html',
  styleUrl: './matricula-detail.css',
})
export class MatriculaDetail implements OnInit {

  id!: number;
  matricula!: Matricula;

  constructor(private route: ActivatedRoute, private matriculaService: MatriculaService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
    });

    this.matriculaService.getMatriculaById(this.id).subscribe(matricula => {
      this.matricula = matricula;
    });
  }
}
