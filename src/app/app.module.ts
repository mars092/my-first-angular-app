import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserBoxComponent,
    UserDialogComponent,
    AddNewUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
