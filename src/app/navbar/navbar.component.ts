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
export class NavbarComponent {
  @Input() cursos: Curso[] = [];
  @Output() onTextChanged = new EventEmitter<string>();

  @ViewChild('filtro', { static: false })
  filtro!: ElementRef;

  private _textoFiltro: string = '';

  set textoFiltro(t: string) {
    this._textoFiltro = t;
  }

  get textoFiltro() {
    return this._textoFiltro;
  }

  ngAfterViewInit() {
    this.filtro.nativeElement.value = '';
    this.filtro.nativeElement.addEventListener('input', () => {
      this.searchTextChanged();
    });
  }

  searchTextChanged() {
    this.onTextChanged.emit(this._textoFiltro);
  }
}
