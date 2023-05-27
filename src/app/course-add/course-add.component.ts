import { Component } from '@angular/core';

@Component({
  selector: 'pa-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
})
export class CourseAddComponent {
  nombre: string = '';
  precio!: number;
  urlImagen: string = '';
  descripcion: string = '';
}
