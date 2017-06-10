import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'home', component: HomeComponent, data: { title: 'home' }  },
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CoursesComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
