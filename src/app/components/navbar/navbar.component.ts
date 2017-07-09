import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router'
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
// service
import { YoutubeService } from '../../service/youtube.service';
import { LoaderService } from '../../service/loader.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public YoutubeService: YoutubeService, private router: Router, vcRef: ViewContainerRef, private loaderService: LoaderService) {
    this.user = afAuth.authState;
  }

  login() {
    this.loaderService.display(true);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this.loaderService.display(false);
    });
  }

  logout(page) {
    this.afAuth.auth.signOut();
    this.router.navigate([page]);
  }

  search() {
    this.loaderService.display(true);
    const stringSearch = (<HTMLInputElement>document.getElementById('popo')).value;
    this.YoutubeService.search(stringSearch);
  }
}
