import { Component, Input } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'pa-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.scss'],
})
export class CourseActionComponent {
  @Input()
  curso!: Curso;

  editarCurso(curso: any) {
    console.log('Edit: ', curso);
  }

  eliminarCurso(curso: any) {
    console.log('Eliminar: ', curso);
  }

  onMouseover(event: any) {
    console.log('Mouse Over: ', event);
  }

  onDoubleclick(event: any) {
    console.log('Double Click: ', event);
  }
}
