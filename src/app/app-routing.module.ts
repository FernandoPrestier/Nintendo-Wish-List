import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent as  GameCatalogMainView } from './game-catalog/views/main/main.component';
import { NotFoundComponent as PageNotFoundView  } from './global/views/not-found/not-found.component';
import { MainComponent as  whisListMainPage} from './whish-list-car/views/main/main.component';

const routes: Routes = [
  { path: 'store-games-nintendo-switch' , component: GameCatalogMainView },
  { path: 'es-mx-wish-list' , component:  whisListMainPage},
  { path: '' , redirectTo: '/store-games-nintendo-switch', pathMatch: 'full'},
  { path: '**' , component: PageNotFoundView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
