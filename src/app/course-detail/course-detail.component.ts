import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  @Input() selectedCourse?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private _coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.getTask()
  }

  getTask() {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this._coursesService.getAllCourses().subscribe({
      next: (res) => {
        const course = res.find((el: any) => el.id == courseId);
        this.selectedCourse = course;
      },
      error: console.log,
    });
  }
}
