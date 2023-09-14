import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _http: HttpClient) {}

  addCourses(data: any) {
    return this._http.post('http://localhost:3000/courses', data);
  }
}
