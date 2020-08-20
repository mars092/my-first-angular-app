import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  avatar: string;
  last_name: string;
  first_name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  url = 'https://reqres.in/api/users';
  users: User[];
  btnActive: string = 'Grid';

  constructor(private http: HttpClient) {
    this.http
      .get(this.url)
      .toPromise()
      .then((data: any) => {
        this.users = data.data;
      });
  }

  ngOnInit(): void {}

  onGrid() {
    this.btnActive = 'Grid';
  }

  onList() {
    this.btnActive = 'List';
  }
}
