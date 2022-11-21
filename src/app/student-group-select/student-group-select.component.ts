import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../data/courses.service';
import { StudentGroup } from '../models/studentsGroup';

@Component({
  selector: 'app-student-group-select',
  templateUrl: './student-group-select.component.html',
  styleUrls: ['./student-group-select.component.css']
})
export class StudentGroupSelectComponent implements OnInit {

  studentGroups: StudentGroup[] = []

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getStudentGroups().
      subscribe(data => this.studentGroups = data);
  }

}
