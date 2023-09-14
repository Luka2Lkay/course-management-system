import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private _http: HttpClient) {}

  addCourses(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/courses', data);
  }

  getAllCourses(): Observable<any> {
    return this._http.get("http://localhost:3000/courses")
  }

  deleteCourse(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/courses/${id}`)
  }

  updateCourse(id: number, data:any): Observable<any> {
    return this._http.put(`http://localhost:3000/courses/${id}`, data)
  }
}
