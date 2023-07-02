import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss']
})
export class HeaderDesktopComponent implements OnInit {

  search = new FormControl('');
  categorieState = {
    isOpen : false,
    valueSelected: 'Todas las categorias',
    options: [
      'Todas las categorias',
      'Juegos',
      'Noticias y eventos',
      'Soporte',
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
