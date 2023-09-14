import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course', component: CoursesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }