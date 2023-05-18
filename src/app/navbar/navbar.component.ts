import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  EventEmitter,
  ViewChild,
  Output,
} from '@angular/core';
import { CoursesService } from '../courses.service';
import { Curso } from '../curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'pa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  private cursosInit: Curso[] = [];
  @Input() cursos: Curso[] = [];
  @Output() onTextChanged = new EventEmitter<string>();

  @ViewChild('filtro', { static: false })
  filtro!: ElementRef;

  private _textoFiltro: string = '';

  set textoFiltro(t: string) {
    this._textoFiltro = t;
    this.cursos = t ? this.filtrarCursos(t) : [];

    if (this.cursos.length === 0) {
      this.coursesService
        .getCourses()
        .subscribe((cursos: Curso[]) => (this.cursos = cursos));
    }
  }

  constructor(private coursesService: CoursesService) {}

  get textoFiltro() {
    return this._textoFiltro;
  }

  ngOnInit() {
    this.coursesService
      .getCourses()
      .subscribe((cursos: Curso[]) => (this.cursos = cursos));
    this.cursos = this.cursosInit;
  }

  ngAfterViewInit() {
    this.filtro.nativeElement.value = '';
    this.filtro.nativeElement.addEventListener('input', () => {
      this.searchTextChanged();
    });
  }

  filtrarCursos(text: string) {
    return this.cursos.filter(
      (curso: Curso) =>
        curso.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
    );
  }

  searchTextChanged() {
    this.onTextChanged.emit(this._textoFiltro);
  }
}
