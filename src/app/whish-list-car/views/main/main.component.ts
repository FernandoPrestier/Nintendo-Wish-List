import { Component, OnInit } from '@angular/core';
import {mockItems} from './mockData'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  listaBreadCrum = [ 
    {text: 'Inicio' , path: '/', canClick: true}, 
    {text: 'Lista de deseos' , path: '', canClick: false} 
  ]

  favoriteIsOn = false;

  itemsMock = mockItems;
  
  constructor() { }
  
  ngOnInit(): void {
    this.itemsMock = [];
  }

  hasItem():boolean {
    return this.itemsMock.length > 0
  }

}
