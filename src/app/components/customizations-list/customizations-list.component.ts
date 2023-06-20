import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreateCustomizationComponent } from '../create-customization/create-customization.component';
export interface Customization {
  name: string;
  category: string;
  price: number;


}

@Component({
  selector: 'app-customizations-list',
  templateUrl: './customizations-list.component.html',
  styleUrls: ['./customizations-list.component.css']
})
export class CustomizationsListComponent  implements OnInit{

  displayedColumns: string[] = [
    'name',
    'category',
    'price',



  ];
  constructor(private dialog: MatDialog) { }

  dataSource!: MatTableDataSource<Customization>;




  ngOnInit(): void {
    const ordersData: Customization[] = [
      { name: 'Vanilla', category: "Filling", price: 12.00 },
      { name: 'Rainbow Sprinkles', category: "Toppings", price:90.00 },
      // Add more orders here as needed
    ];

    this.dataSource = new MatTableDataSource(ordersData);

  }

  openAddCustomization() {
    const dialogRef = this.dialog.open(CreateCustomizationComponent, {
      width: '400px', // Adjust the width as per your requirements
      // You can also specify other dialog configuration options here
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed
      console.log('Dialog closed', result);
    });
  }


}
