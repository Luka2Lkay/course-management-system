import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit{

  constructor(private _courseService: CoursesService) {}

courses?: any

  ngOnInit(): void {
    this.getAllCourses()
  }

getAllCourses (): void {
  this._courseService.getAllCourses().subscribe({
    next: (res) => {
      this.courses = res
    }
  })
}

removeCourse(id: number): void {
  alert('Are you sure you want to delete this course?')
  this._courseService.deleteCourse(id).subscribe({
    next: () => {
    
      this.getAllCourses()
      alert('Deleted a course')
    },
    error: console.log
  })
}
}
