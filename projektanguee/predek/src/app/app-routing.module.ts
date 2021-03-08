import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesListComponent} from './gameslist/gameslist.component';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'gameslist', component: GamesListComponent},
  {path: '', redirectTo: '/gameslist', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
