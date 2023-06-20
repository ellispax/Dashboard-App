import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  user: any = {}; // Initialize an empty object for the User

  constructor(

    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit() {

  }

  saveProduct() {
    // Perform any necessary operations with the User data
    console.log('User:', this.user);

    // Close the dialog and pass the User data back to the parent component
    this.dialogRef.close(this.user);
  }

  closeDialog() {
    // Close the dialog without passing any data
    this.dialogRef.close();
  }

}
