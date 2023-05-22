import { Injectable } from '@angular/core';
import { Curso } from './curso';
// import { COURSES } from './data/courses';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<Curso[]> {
    return this.httpClient
      .get<Curso[]>('/assets/api/courses/courses.json')
      .pipe(catchError(this.manejarError));
  }
  manejarError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.log('Error de cliente: ', err.error.message);
    } else {
      // Error del lado del servidor
      console.log('Error Status: ', err.status);
      console.log('Error: ', err.error);
    }
    return throwError(
      'Hubo un problema al obtener los datos. Intente más tarde'
    );
  }
}
