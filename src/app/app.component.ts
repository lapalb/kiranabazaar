import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kiranabazaar';
  openLoginDialog = function () {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('The Login dialog is opened');
  };
  openSignUpDialog = function () {
    console.log('The Sign Up dialog is opened');
  }
  constructor(public dialog: MatDialog) {}
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialogComponent {}
