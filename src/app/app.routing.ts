import { Routes, RouterModule } from '@angular/router';
// components
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
// conf routes
const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'home', component: HomeComponent, data: { title: 'home' }  },
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: '**', component: HomeComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
