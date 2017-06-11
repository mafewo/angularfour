import { Component, ViewChild, Injectable } from '@angular/core';
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
@Injectable()
export class AppComponent {
  title = 'app';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  popo;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.items = db.list('items');
    this.user = afAuth.authState;
    this.popo = '';
  }

  login() {
    // this.afAuth.auth.signInAnonymously();
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result) {
      // console.log(result);
      this.popo = result; // porque carajo es undefinedddD????????
      // console.log(this.afAuth.authState);
      // console.log(this.users);
    }).catch(function(error){
      console.error(error);
    });
  // provider = new firebase.auth.FacebookAuthProvider();
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
