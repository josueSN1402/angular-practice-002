import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseAddReactiveComponent } from './course-add-reactive/course-add-reactive.component';
import { CourseActionComponent } from './course-action/course-action.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseAddComponent,
    CourseAddReactiveComponent,
    CourseActionComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
