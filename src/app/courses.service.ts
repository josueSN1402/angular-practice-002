import { Injectable } from '@angular/core';
import { Curso } from './curso';
// import { COURSES } from './data/courses';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>('../assets/api/courses/courses.json');
  }
}
