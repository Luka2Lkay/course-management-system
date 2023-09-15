import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  cmsForm: FormGroup = this._fb.group({
    course: '',
    modules: '',
    duration: '',
    description: '',
    availability: '',
  });

  completionTimes: string[] = ['3 Months', '6 Months', '12 Months'];
  availabity: string[] = ['Available', 'Not Available'];

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddCourseComponent>,
    private _coursesService: CoursesService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.cmsForm.patchValue(this.data);
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  save() {
    if (this.cmsForm.valid) {
      if (this.data) {
        this._coursesService
          .updateCourse(this.data.id, this.cmsForm.value)
          .subscribe({
            next: () => {
              this.reloadCurrentRoute();
              this._dialogRef.close(true);
            },
            error: console.log,
          });
      } else {
        this._coursesService.addCourses(this.cmsForm.value).subscribe({
          next: () => {
            this.reloadCurrentRoute();
            this._dialogRef.close(true);
          },
          error: console.log,
        });
      }
    }
  }
}
