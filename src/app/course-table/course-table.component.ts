import { Component, OnInit } from '@angular/core';

import { Course } from '../models/Course';
import { CoursesService } from '../data/courses.service';


@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  courses : Course[] = [];

  displayedColumns: string[] = ['duration', 'subjectName', 'teacherPersonals', ];
 
  ngOnInit(): void {
    this.coursesService.getCourses().
        subscribe(data => this.courses = data);
  }

}
