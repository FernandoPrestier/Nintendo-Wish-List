import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as wishActions from "../../../state/actions/wish.actions";
import { AppState } from 'src/app/state/app.reducer';

@Component({
  selector: 'app-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.scss']
})
export class ItemCatalogComponent implements OnInit {

  mockItems:wishActions.IitemGame[];

  constructor(
    private store: Store<AppState>
  ) { 
    this.mockItems = []

    this.store.select('State','mockData').subscribe( e => {
      this.mockItems = e;
    })
  }

  ngOnInit(): void {
  }

  toogleFavorite(item: any): void{
    if (item.isFavorite) {
      this.store.dispatch(wishActions.setNotFavoriteAction({idMock: item.id}))
    
    }else{
      this.store.dispatch(wishActions.setFavoriteAction({idMock: item.id}))
    }
  }

}
