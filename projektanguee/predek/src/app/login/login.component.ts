import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  private url = '/api/games';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router){
  }
  clickedButton() {
    this.http.post(this.url, {password: this.password, email: this.email,}).subscribe(
      (data: any) => {
        this.router.navigate(['/login']);
      }, (error) => {
      });
  }
  ngOnInit() {
  }
}
