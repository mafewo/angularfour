import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';

// bootstrap components
import { AlertModule, CollapseModule } from 'ngx-bootstrap';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// config routes
import { routing } from './app.routing';
// config firebase
import { firebaseConfig } from './app.firebaseconfig';
// components
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomModal } from './components/modal/modal.component';
// service
import { YoutubeService } from './service/youtube.service';
import { LoaderService } from './service/loader.service';
// import { Filtros } from './app.filter';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CoursesComponent,
    HomeComponent,
    UserComponent,
    NavbarComponent,
    CustomModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    /*FormControl,
    ReactiveFormsModule,*/
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig), // initialize app firebase
    AngularFireDatabaseModule, // database module
    AngularFireAuthModule, // auth module
    routing // routes implements
  ],
  providers: [
    YoutubeService,
    LoaderService,
    /*FormControl,
    ReactiveFormsModule*/
    ],
  bootstrap: [AppComponent],
  entryComponents: [ CustomModal ]
})
export class AppModule { }
