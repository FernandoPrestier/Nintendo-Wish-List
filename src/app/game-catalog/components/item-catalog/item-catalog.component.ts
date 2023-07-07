import { Component, OnInit } from '@angular/core';
import { mockItems } from './mockData';

@Component({
  selector: 'app-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.scss']
})
export class ItemCatalogComponent implements OnInit {

  mockItems = mockItems;

  constructor() { }

  ngOnInit(): void {
  }

}
