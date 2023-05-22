import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { EMPTY, catchError, of, tap } from 'rxjs';

@Component({
  selector: 'pa-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  titulo: string = 'Lista de Cursos!';
  anchoImagen: string = '40px';

  cursos: Curso[] = [];
  cursosFiltrados: Curso[] = [];
  textoFiltro: string = '';
  mensajeError: string = '';

  constructor(private router: Router, private coursesService: CoursesService) {
    // this.cursos = this.coursesService.getCourses();
  }

  getCourses() {
    this.coursesService
      .getCourses()
      .pipe(
        tap((cursos) => console.log('Cursos ', cursos)), // Forma de mostrar datos en consola cada que se producen cambios para hacer debugging
        catchError((err) => {
          this.mensajeError = err;
          return EMPTY;
        })
      )
      .subscribe((cursos: Curso[]) => {
        this.cursos = cursos;
        this.cursosFiltrados = cursos;
      });
  }

  ngOnInit() {
    this.getCourses();
  }

  onEditCurso(curso: Curso) {
    console.log('[Courses] Edit', curso);
    const id = curso.id;
    this.router.navigate(['/course', id]);
  }

  onDeleteCurso(curso: Curso) {
    console.log('[Courses] Delete', curso);
    this.cursos = this.cursos.filter((c: Curso) => c.id !== curso.id);
  }

  onSearchTextChanged(text: string) {
    this.textoFiltro = text;

    if (!text) {
      this.cursosFiltrados = this.cursos;
    } else {
      this.cursosFiltrados = this.cursos.filter((curso) => {
        return (
          curso.name.toLowerCase().includes(text.toLowerCase()) ||
          curso.description.toLowerCase().includes(text.toLowerCase())
        );
      });
    }
  }
}
