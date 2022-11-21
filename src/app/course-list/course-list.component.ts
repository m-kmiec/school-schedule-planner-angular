import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CoursesService } from '../data/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: Course[]=[];
  columns = [
    {
      columnDef: 'subject',
      header: 'Subject',
      cell: (course: Course) => `${course.subject.name}`,
    },
    {
      columnDef: 'teacher',
      header: 'Teacher',
      cell: (course: Course) => `${course.teacher.surrname}`,
    },
    {
      columnDef: 'type',
      header: 'Type',
      cell: (course: Course) => `${course.type}`,
    },
    {
      columnDef: 'duration',
      header: 'Duration',
      cell: (course: Course) => `${course.duration}`,
    },
    {
    columnDef: 'hoursReq',
      header: 'Hours required',
      cell: (course: Course) => `${course.hoursReq}`,
    }
  ];
  displayedColumns: any[] = []; 
  constructor(private dialog: MatDialog, private coursesService: CoursesService){}
    ngOnInit(){
      this.coursesService.getCourses().
        subscribe(data => this.courses = data);
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }
  openDialog(){
    this.dialog.open(AddCourseComponent, {
      width: "30%"
    });
  }
}
