import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: Course[]=[];
  constructor(private dialog: MatDialog
    ){}
    ngOnInit(){}
  openDialog(){
    this.dialog.open(AddCourseComponent, {
      width: "30%"
    });
  }
}
