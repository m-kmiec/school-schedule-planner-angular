import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: "subjects", component: AppComponent },
  {path: "courses", component: CourseListComponent},
  {path: "addCourse", component: AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
