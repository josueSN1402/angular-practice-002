import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'pa-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.scss'],
})
export class CourseActionComponent {
  @Input()
  curso!: Curso;

  @Output()
  edit: EventEmitter<Curso> = new EventEmitter<Curso>();

  @Output()
  delete: EventEmitter<Curso> = new EventEmitter<Curso>();

  editarCurso(curso: Curso) {
    console.log('Edit: ', curso);
    this.edit.emit(curso); // Envia el objeto Curso hacia el componente Padre
  }

  eliminarCurso(curso: Curso) {
    console.log('Eliminar: ', curso);
    this.delete.emit(curso); // Envia el objeto Curso hacia el componente Padre
  }

  onMouseover(event: any) {
    console.log('Mouse Over: ', event);
  }

  onDoubleclick(event: any) {
    console.log('Double Click: ', event);
  }
}
