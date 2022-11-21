import { Component, OnInit } from '@angular/core';

import { Course } from '../models/Course';
import { CoursesService } from '../data/courses.service';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  courses: Course[] = [];

  selection: SelectionModel<Course> = new SelectionModel<Course>(false, []);

  displayedColumns: string[] = ['Duration', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
 
  ngOnInit(): void {
    this.coursesService.getCourses().
        subscribe(data => this.courses = data);
  }

}
