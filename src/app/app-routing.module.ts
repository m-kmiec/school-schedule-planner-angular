import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { GroupListComponent } from './group-list/group-list.component';
import { StudentGroupSelectComponent } from './student-group-select/student-group-select.component';

const routes: Routes = [
  { path: '', component: StudentGroupSelectComponent },
  { path: "courses", component: CourseListComponent },
  { path: "groups", component: GroupListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
