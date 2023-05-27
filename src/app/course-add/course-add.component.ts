import { Component, ViewChild } from '@angular/core';
import { Curso } from '../curso';
import { FormControl } from '@angular/forms';

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

  model: Curso = {
    id: 0,
    name: '',
    description: '',
    startDate: '',
    price: 0,
    rating: 0,
    imageUrl: '',
  };

  @ViewChild('formAdd', { static: false })
  form!: FormControl;

  onSubmit() {
    console.log('onSubmit', this.form);
    if (this.form.valid) {
      // Enviar el modelo a un servidor
      console.log('modelo', this.model);
      // Reinicializar el formulario
      this.form.reset();
    }
  }
}
