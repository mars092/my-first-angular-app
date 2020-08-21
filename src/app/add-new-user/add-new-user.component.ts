import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent implements OnInit {
  infoNewUser: NewUser;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddNewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(customerData) {
    // Process checkout data here
    // console.warn('Your order has been submitted', customerData);
    this.infoNewUser = customerData;

    this.checkoutForm.reset();
  }
}
