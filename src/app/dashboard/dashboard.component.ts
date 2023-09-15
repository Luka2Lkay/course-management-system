import { Component, OnInit } from '@angular/core';
// import { Course } from '../course'
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private CoursesService: CoursesService) {}

  availableCourses?: any[];

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.CoursesService.getAllCourses().subscribe({
      next: (res) => {
        const available = res.filter((courses: any) => {
          return courses.availability === 'available';
        });

        this.availableCourses = available;
      },
      error: console.log,
    });
  }
}
