import { Component, OnInit } from '@angular/core';
import { Service } from '../data/data.service';
import { StudentGroup } from '../models/studentsGroup';

@Component({
  selector: 'app-student-group-select',
  templateUrl: './student-group-select.component.html',
  styleUrls: ['./student-group-select.component.css']
})
export class StudentGroupSelectComponent implements OnInit {

  selectedStudentGroup?: string;

  studentGroups: StudentGroup[] = []

  constructor(private coursesService: Service) { }

  ngOnInit(): void {
    this.coursesService.getStudentGroups().
      subscribe(data => this.studentGroups = data);
  }

}
