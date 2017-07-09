import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { UserComponent } from './components/user/user.component';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;
  showLoader: boolean;

  constructor(public afAuth: AngularFireAuth, private loaderService: LoaderService) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
      this.loaderService.status.subscribe((val: boolean) => {
          this.showLoader = val;
      });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(this.user);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  mostrar() {
  }
}
