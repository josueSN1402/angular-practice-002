import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CoursesService } from '../courses.service';
import { Curso } from '../curso';

@Component({
  selector: 'pa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() cursos: any;

  @ViewChild('filtro', { static: false })
  filtro!: ElementRef;

  private _textoFiltro: string = '';

  set textoFiltro(t: string) {
    this._textoFiltro = t;
    this.cursos = t ? this.filtrarCursos(t) : this.coursesService.getCourses();
  }

  constructor(private coursesService: CoursesService) {
    this.cursos = this.coursesService.getCourses();
  }

  get textoFiltro() {
    return this._textoFiltro;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.filtro.nativeElement.value = '';
  }

  filtrarCursos(text: string) {
    return this.cursos.filter(
      (curso: Curso) =>
        curso.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
    );
  }
}
