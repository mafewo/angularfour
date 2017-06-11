import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// bootstrap components
import { AlertModule } from 'ngx-bootstrap';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// components
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
// conf routes
import { routing } from './app.routing';
// conf firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyAHvtTzEsVrT7kPMd5GflGlLuBhngN5KiE',
  authDomain: 'hellsbells-f83fc.firebaseapp.com',
  databaseURL: 'https://hellsbells-f83fc.firebaseio.com',
  storageBucket: 'hellsbells-f83fc.appspot.com',
  messagingSenderId: '697879315558'
};

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CoursesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig), // initialize app firebase
    AngularFireDatabaseModule, // database module
    AngularFireAuthModule, // auth module
    routing // routes implements
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
