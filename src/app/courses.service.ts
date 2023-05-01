import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { COURSES } from './data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses(): Curso[] {
    return COURSES;
  }
}
