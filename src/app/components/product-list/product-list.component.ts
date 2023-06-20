import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { __importDefault } from 'tslib';
import { CreateProductComponent } from '../create-product/create-product.component';

export interface Product {
  name: string;
  description: string;
  category: string;
  price: number;

}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'description',
    'category',
    'price',

  ];
  constructor(private dialog: MatDialog) { }

  dataSource!: MatTableDataSource<Product>;

  ngOnInit(): void {
    const ordersData: Product[] = [
      { name: 'Cake', description: "this is a product", category: '2023-06-10', price: 22.22 },
      { name: 'Pie', description: "This is a product too", category: '2023-06-12', price: 25.5 },
      // Add more orders here as needed
    ];

    this.dataSource = new MatTableDataSource(ordersData);

  }
  openAddProduct() {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: '400px', // Adjust the width as per your requirements
      // You can also specify other dialog configuration options here
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed
      console.log('Dialog closed', result);
    });
  }

}
