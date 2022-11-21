import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: "subjects", component: AppComponent },
  {path: "courses", component: CourseListComponent},
  {path: "addCourse", component: CourseDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
