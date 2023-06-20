import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreateUserComponent } from '../create-user/create-user.component';
export interface Users {
  name: string;
  username: string;
  email: string;
  type: string;

}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'username',
    'email',
    'type',


  ];
  constructor(private dialog: MatDialog) { }

  dataSource!: MatTableDataSource<Users>;




  ngOnInit(): void {
    const ordersData: Users[] = [
      { name: 'Misa', username: "misax", email: 'misaxirinda@gmail.com', type: "admin" },
      { name: 'user', username: "dummy_user", email: 'user@email.com', type: "user" },
      // Add more orders here as needed
    ];

    this.dataSource = new MatTableDataSource(ordersData);

  }

  openAddUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '400px', // Adjust the width as per your requirements
      // You can also specify other dialog configuration options here
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed
      console.log('Dialog closed', result);
    });
  }


}
