import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {
  singleUser: any;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.http
      .get('https://reqres.in/api/users/' + data.id)
      .toPromise()
      .then((data: any) => {
        this.singleUser = data.data;
      });
  }

  ngOnInit(): void {}
}
