import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
 cmsForm: FormGroup ;

 completionTimes: string[] = ['3 Months', '6 Months', '12 Months']
 availabity: string[] = ["available", "not available"]

 constructor(private _fb: FormBuilder, private _dialogRef: MatDialogRef<AddCourseComponent>, private _coursesService: CoursesService){
  this.cmsForm = this._fb.group({
    course : '',
    modules : '',
    duration : '',
    description:'',
    availability:''
  })

 }
 
save(){
  if(this.cmsForm.valid){
this._coursesService.addCourses(this.cmsForm.value).subscribe({
  next: (res) => {
    console.log(res)
  }
})  
    this._dialogRef.close()
  }
}
}
