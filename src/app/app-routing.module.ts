import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseTableComponent } from './course-table/course-table.component';

const routes: Routes = [
  { path: 'home', component: CourseTableComponent},
  { path: "subjects", component: AppComponent },
  {path: "courses", component: CourseListComponent},
  {path: "addCourse", component: CourseDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
