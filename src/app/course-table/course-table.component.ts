import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { Service } from '../data/data.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectCourseForTimestampComponent } from '../select-course-for-timestamp/select-course-for-timestamp.component';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(
    private service: Service,
    private dialog: MatDialog) { }

  @Input() studentGroup : string = '';

  courses: Course[] = [];

  plan: any = [];

  timestamps: string[] = ['8:00 - 8:45', '8:55 - 9:40', '9:50 - 10:35', '10:55 - 11:40', '11:50 - 12:35', '12:45 - 13:30', '13:40 - 14:25'];

  displayedColumns: string[] = ['Duration', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  ngOnInit(): void {
    this.service.getCourses().
        subscribe(data => this.courses = data);
    this.service.getPlanForGroup(this.studentGroup).
        subscribe(data => this.plan = data)
  }

  onSelectionChange() {
    this.dialog.open(SelectCourseForTimestampComponent, {
      width: '30%'
    })
  } 
}
