import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8VEaDWHjrG-sejoB_GXLpfhQvmhVhJeg',
      authDomain: 'ngcoursepj.firebaseapp.com',
      databaseURL: 'https://ngcoursepj.firebaseio.com',
      projectId: 'ngcoursepj',
      storageBucket: 'ngcoursepj.appspot.com',
      messagingSenderId: '356349711426'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
