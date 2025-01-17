import { Component, OnInit } from '@angular/core';
import {Game} from '../modely/game-params';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-game-list',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.css']
})
export class GamesListComponent implements OnInit {

  title = 'Gameska';

  games: Game[] = [];
  url = 'http://127.0.0.1:8080/GameAPI/api/games';
  id = '';
  name = '';
  price = '';
  studio = '';
  constructor(private http: HttpClient, private router: Router) {
    this.ngOnInit();
  }
  addGame(): void {
    const body = {
      id: this.id,
      name: this.name,
      price: this.price,
      studio: this.studio};
    this.http.post(this.url, body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
        },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  checkGame(id: number): void {
    this.router.navigateByUrl('detail/' + id);
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      (data: Game[]) => {
        this.games = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
