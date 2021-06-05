import { Component, EventEmitter, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = 'Akanksha';

  openLoginDialog = () => {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent,{
      height: '250px',
    });
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
  constructor(public dialog: MatDialog, private sharedService: SharedService) {
    this.sharedService.onHide$.subscribe((data) => {
      this.user = data;
      this.isLoggedIn = true;
    });
  }

  ngOnInit(): void {
    // Init Function
  }

}
@Injectable({
  providedIn: 'root',
})
export class SharedService{
  public onHide$ = new EventEmitter<string>();
}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styles: ['mat-dialog-content { padding: 15px; margin-bottom: 0px}']
})
export class DialogContentExampleDialogComponent {
   googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';
  loginGmail =  () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
      .then((result) => {
        this.sharedService.onHide$.emit(result.user.displayName);
        console.log(result.user);
    }).catch((error) => {
      // ...
  });
  }

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer, private sharedService: SharedService) {
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));
  }
}
