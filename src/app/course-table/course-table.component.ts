import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { Service } from '../data/data.service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor() { }

  courses: Course[] = [];

  displayedColumns: string[] = ['Duration', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
 
  ngOnInit(): void {
    Service.getCourses().
        subscribe(data => this.courses = data);
  }

}
