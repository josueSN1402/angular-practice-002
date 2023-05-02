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

@Component({
  selector: 'pa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() cursos: Curso[] = [];
  @Output() onTextChanged = new EventEmitter<string>();

  @ViewChild('filtro', { static: false })
  filtro!: ElementRef;

  private _textoFiltro: string = '';

  set textoFiltro(t: string) {
    this._textoFiltro = t;
    this.cursos = t ? this.filtrarCursos(t) : this.coursesService.getCourses();
  }

  constructor(private coursesService: CoursesService) {
    // this.cursos = this.coursesService.getCourses();
  }

  get textoFiltro() {
    return this._textoFiltro;
  }

  ngOnInit() {
    this.cursos = this.coursesService.getCourses();
  }

  ngAfterViewInit() {
    this.filtro.nativeElement.value = '';
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
