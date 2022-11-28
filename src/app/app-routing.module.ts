import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDialogComponent } from './group-dialog/group-dialog.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: "subjects", component: AppComponent },
  { path: "courses", component: CourseListComponent },
  { path: "addCourse", component: CourseDialogComponent },
  { path: "groups", component: GroupListComponent },
  { path: "groupsDialog", component: GroupDialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
