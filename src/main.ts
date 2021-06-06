import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: 'AIzaSyBi9BviTQToBT29uNN3_EIFPSB6pG_JW_g',
  authDomain: 'kart-13126.firebaseapp.com',
  databaseURL: 'https://kart-13126-default-rtdb.firebaseio.com',
  projectId: 'kart-13126',
  storageBucket: 'kart-13126.appspot.com',
  messagingSenderId: '235443820306',
  appId: '1:235443820306:web:fa3a4d01575d2d5ae105cb',
  measurementId: 'G-X2HX7B2HGN'
  };

firebase.initializeApp(firebaseConfig);


