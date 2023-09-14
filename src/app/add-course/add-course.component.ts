import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
 cmsForm: FormGroup ;

 completionTimes: string[] = ['3 Months', '6 Months', '12 Months']
 availabity: string[] = ["available", "not available"]

 constructor(private _fb: FormBuilder, private _dialogRef: MatDialogRef<AddCourseComponent>){
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
    console.log(this.cmsForm.value)
    this._dialogRef.close()
  }
}
}
