import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {


  constructor() { }

  Courses : Course[] = [];
  displayedColumns: string[] = ['duration', 'subjectName', 'teacherPersonals', ];
 
  ngOnInit(): void {
  }

}
