import { Component, OnInit } from '@angular/core';
import { SUBJECTS } from '../database/list-of-subjects';
import { Course } from '../models/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{
  courses: Course[]=[];
  constructor(
    private router: Router
    ){}
    ngOnInit(){}
  public addCourse(): void{
    this.router.navigate(['/addCourse']);
  }
}
