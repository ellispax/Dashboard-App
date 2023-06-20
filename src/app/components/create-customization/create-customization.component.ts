import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-create-customization',
  templateUrl: './create-customization.component.html',
  styleUrls: ['./create-customization.component.css']
})
export class CreateCustomizationComponent implements OnInit {

  customization: any = {}; // Initialize an empty object for the product

  constructor(

    public dialogRef: MatDialogRef<CreateCustomizationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  ngOnInit() {

  }

  saveCustomization() {
    // Perform any necessary operations with the customization data
    console.log('Customization:', this.customization);

    // Close the dialog and pass the Customization data back to the parent component
    this.dialogRef.close(this.customization);
  }

  closeDialog() {
    // Close the dialog without passing any data
    this.dialogRef.close();
  }
}
