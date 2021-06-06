import { Component, EventEmitter, Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  isLoggedIn;
  user="lol";
  clearNavBar = () => {
    this.isLoggedIn = false;
    this.user = '';
  };
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
    firebase.auth().signOut();
    this.clearNavBar();
  }
  constructor(public dialog: MatDialog, private sharedService: SharedService) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        sharedService.onHide$.emit(user.displayName);
      } else {
        // No user is signed in.
      }
    });
    this.sharedService.onHide$.subscribe((data) => {
      this.user = data;
      this.isLoggedIn = true;
    })
  }

  ngOnInit(): void {

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
  loginGmail = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
      .signInWithPopup(provider)
        .then((result) => {debugger
          this.sharedService.onHide$.emit(result.user.displayName);
          console.log(result.user);
          this.dialogRef.close();
      }).catch((error) => {
        // ...
    });
    })
  }


  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer, private sharedService: SharedService,  public dialogRef: MatDialogRef<DialogContentExampleDialogComponent>) {
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));

  }
}
