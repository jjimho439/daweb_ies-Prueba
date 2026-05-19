import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Asignatura } from '../../model/asignatura';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura-service';
import { Alumno } from '../../model/alumno';
import { MatriculaService } from '../../services/matricula-service';


@Component({
  selector: 'app-alumnos-asignatura',
  imports: [CommonModule],
  templateUrl: './alumnos-asignatura.html',
  styleUrl: './alumnos-asignatura.css',
})
export class AlumnosAsignatura {

  id!: number;
  asignatura!: Asignatura;
  alumnos: Alumno[] = [];

  constructor(
    private route: ActivatedRoute,
    private asignaturaService: AsignaturaService,
    private matriculaService: MatriculaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);

      this.asignaturaService.getAsignaturaById(this.id).subscribe(asignatura => {
        this.asignatura = asignatura;
      });

      this.matriculaService.getMatriculas().subscribe(matriculas => {
        this.alumnos = matriculas
          .filter(matricula => matricula.asignatura.id == this.id)
          .map(matricula => matricula.alumno);
      });
    });
  }

}
