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

 constructor(private _fb: FormBuilder, private _dialogRef: MatDialogRef<AddCourseComponent>){
  this.cmsForm = this._fb.group({
    course : '',
    modules : '',
    duration : '',
  })


 }
 
save(){
  if(this.cmsForm.valid){
    console.log(this.cmsForm.value)
  }
}
}
