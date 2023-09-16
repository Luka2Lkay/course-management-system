import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private CoursesService: CoursesService, private router: Router) {}

  availableCourses?: any[];

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.CoursesService.getAllCourses().subscribe({
      next: (res) => {
        const available = res.filter((courses: any) => {
          return courses.availability === 'Yes';
        });

        this.availableCourses = available;
      },
      error: console.log,
    });
  }

  onSelect(id: number): void {
    const shortenedId = id.toString().slice(5,10)
    this.router.navigate(["/detail", shortenedId])
  }
}
