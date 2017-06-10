import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  provider = new firebase.auth.FacebookAuthProvider();

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.provider.addScope('user_birthday');
    this.user = afAuth.authState;
    this.items = db.list('items');
  }

  login() {
    firebase.auth().signInWithPopup(this.provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      console.log(result.credential.accessToken);
      console.log('sisi');
      // The signed-in user info.
      // var user = result.user;
      // ...
    }).catch(function(error) {
      console.log('errorpapa');
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
    // this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
