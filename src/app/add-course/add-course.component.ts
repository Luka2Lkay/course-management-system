import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
 cmsForm: FormGroup ;

 constructor(private _fb: FormBuilder){
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
