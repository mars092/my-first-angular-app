import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import {
  AddNewUserComponent,
  NewUser,
} from './add-new-user/add-new-user.component';

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
  @Input() newUser: NewUser;



  url = 'https://reqres.in/api/users';
  users: User[];
  btnActive: string = 'Grid';

  constructor(private http: HttpClient, public dialog: MatDialog) {
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

  openAddNewUser(): void {
    const dialogRef = this.dialog.open(AddNewUserComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
    });
  }
}
