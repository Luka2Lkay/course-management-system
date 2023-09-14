import { Component, OnInit } from '@angular/core';
// import { Course } from '../course';

// import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
 

  constructor() { }

  ngOnInit(){
    this.getCourses();
  }

  getCourses() {
   
  }
  
}
