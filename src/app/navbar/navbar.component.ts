import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'pa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() cursos: any;

  @ViewChild('filtro', { static: false })
  filtro!: ElementRef;

  textoFiltro: string = '';

  ngOnInit() {}

  ngAfterViewInit() {
    this.filtro.nativeElement.value = '';
  }
}
