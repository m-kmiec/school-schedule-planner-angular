import { Component, OnInit } from '@angular/core';
import { SUBJECTS } from '../database/list-of-subjects';
import { Course } from '../models/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: Course[]=[];
  //subjects: Subject[] = SUBJECTS;
    ngOnInit(): void {

  }
}
