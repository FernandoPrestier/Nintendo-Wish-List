import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listaBreadCrum = [ 
    {text: 'Inicio' , path: '', canClick: true}, 
    {text: 'Tienda' , path: '', canClick: true}, 
    {text: 'Juegos' , path: '', canClick: true}, 
    {text: 'Juegos para Nintendo Switch' , path: '', canClick: false} 
  ]

  stateSort = {
    valueSelected: 'Destacados',
    options : ['Destacados', 'Título (A-Z)', 'Título (Z-A)'],
    isOn : false
  }

  stateFilter = [
    {
      title : "Funciones de Nintendo Switch Online",
      items : [
        {text: "Juego en linea", count: 43},
        {text: "Guardado de datos en la nube", count: 81}
      ]
    },
    {
      title : "Plataforma",
      items : [
        {text: "Nintendo Switch", count: 96}
      ]
    },
    {
      title : "Disponibilidad",
      items : [
        {text: "Disponible ya", count: 96}
      ]
    },
    {
      title : "Género de juego",
      items : [
        {text: "Acción", count: 52},
        {text: "Aventura", count: 40},
        {text: "Carreras", count: 2},
        {text: "Deportes", count: 8},
        {text: "Educativo", count: 1},
        {text: "Entretenimiento", count: 2},
        {text: "Estilo de vida", count: 2},
        {text: "Estartegia", count: 10},
        {text: "Fiesta", count: 8},
        {text: "Juego Arcade", count: 5},
        {text: "Juego de rol", count: 28},
        {text: "Lucha", count: 6},
        {text: "Multijugador", count: 15},
        {text: "Musica", count: 3},
        {text: "Otros", count: 8},
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
