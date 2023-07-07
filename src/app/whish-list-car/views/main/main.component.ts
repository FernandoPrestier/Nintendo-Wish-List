import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as wishActions from "../../../state/actions/wish.actions";
import { AppState } from 'src/app/state/app.reducer';

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

  itemsMock:wishActions.IitemGame[];
  
  constructor(
    private store: Store<AppState>
  ) { 
    this.itemsMock = []

    this.store.select('State','whished').subscribe( e => {
      this.itemsMock = e;

      console.log(this.itemsMock);
      
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

  hasItem():boolean {
    return this.itemsMock.length > 0
  }

}
