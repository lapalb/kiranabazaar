import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = 'Akanksha';

  openLoginDialog = () => {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('The Login dialog is opened');
  }
  openSignUpDialog =  () => {
    console.log('The Sign Up dialog is opened');
  }
  logout = () => {
    alert('You are being logged out');
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // Init Function
  }

}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialogComponent {}
