import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModal } from '../../custom-modal-sample';

import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router'
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
// service
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Modal]
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  videos: Observable<any>;

  constructor(public afAuth: AngularFireAuth, public YoutubeService: YoutubeService, private router: Router, public overlay: Overlay, vcRef: ViewContainerRef, public pop: Modal) {
    this.user = afAuth.authState;
    // overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

 openCustom(video) {
    return this.pop.open(CustomModal,  overlayConfigFactory({ url: `http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://example.com`, title: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com' }, BSModalContext));
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(page) {
    this.afAuth.auth.signOut();
    this.router.navigate([page]);
  }

  search() {
    const stringSearch = (<HTMLInputElement>document.getElementById('popo')).value;
    this.videos = this.YoutubeService.search(stringSearch);
    this.videos.forEach(function(videos) {
      videos.forEach(function(element) {
        element.snippet.title = element.snippet.title.substring(0, 10);
        console.log(element);
      });
    });
  }
}
