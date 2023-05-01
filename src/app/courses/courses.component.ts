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

@Component({
  selector: 'pa-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  titulo: string = 'Lista de Cursos!';
  anchoImagen: string = '40px';

  cursos: any[];

  constructor(private router: Router, private coursesService: CoursesService) {
    this.cursos = this.coursesService.getCourses();
  }

  ngOnInit() {}

  onEditCurso(curso: Curso) {
    console.log('[Courses] Edit', curso);
    // this.router.navigate([`course/${curso.id}`]);
    const id = curso.id;
    this.router.navigate(['/course', id]);
    // Redirección
  }

  onDeleteCurso(curso: Curso) {
    console.log('[Courses] Delete', curso);
    this.cursos = this.cursos.filter((c: Curso) => c.id !== curso.id);
  }
}
