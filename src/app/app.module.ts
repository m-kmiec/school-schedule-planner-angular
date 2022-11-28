import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseTableComponent } from './course-table/course-table.component';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './data/data.service';
import { StudentGroupSelectComponent } from './student-group-select/student-group-select.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDialogComponent } from './group-dialog/group-dialog.component';
import { MaterialModule } from './material/material.module';
import { StartcasePipe } from './startcase.pipe';
import { SelectCourseForTimestampComponent } from './select-course-for-timestamp/select-course-for-timestamp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CourseTableComponent,
    StudentGroupSelectComponent,
    CourseDialogComponent,
    CourseTableComponent,
    GroupListComponent,
    GroupDialogComponent,
    StartcasePipe,
    SelectCourseForTimestampComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
