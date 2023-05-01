import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';

@Component({
  selector: 'pa-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  titulo: string = 'Lista de Cursos!';
  anchoImagen: string = '40px';

  cursos: any[] = [
    {
      id: 1,
      name: 'TypeScript Desde Cero',
      startDate: 'September 29, 2019',
      descripcion:
        'Llva JavaScript al siguiente nivel con tipado estático y programación orientado a objetos',
      price: 25.99,
      rating: '4.5',
      imageUrl: 'assets/images/typescript.png',
    },
    {
      id: 2,
      name: 'Angular Desde Cero',
      startDate: 'September 4, 2019',
      descripcion: 'Aprende el framework con más demanda del mercado',
      price: 29.99,
      rating: '4.7',
      imageUrl: 'assets/images/angular.png',
    },
    {
      id: 3,
      name: 'Formularios y APIs con Angular',
      startDate: 'Octubre 20, 2019',
      descripcion:
        'Aprende a consumir APIs Rest y a gestionar formularios con Angular',
      price: 23.5,
      rating: '3.9',
      imageUrl: 'assets/images/angular.png',
    },
  ];

  constructor(private router: Router) {}

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
