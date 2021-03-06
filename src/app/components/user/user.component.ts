import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Observable<firebase.User>;
  public alerts: any = [
    {
      type: 'md-local',
      msg: `Joya! Estas logueado.`
    }
  ];
  public isCollapsed: boolean = false;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  public collapsed(event: any): void {
    // console.log(event);
  }

  public expanded(event: any): void {
    // console.log(event);
  }

  ngOnInit() {
  }

}
