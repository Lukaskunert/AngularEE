import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesListComponent} from "../gameslist/gameslist.component";


const routes: Routes = [
  {path: 'games', component: GamesListComponent},
  {path: '', redirectTo: '/games', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
