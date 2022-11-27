import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-for-day',
  templateUrl: './add-course-for-day.component.html',
  styleUrls: ['./add-course-for-day.component.css']
})
export class AddCourseForDayComponent implements OnInit {

  @Input() studentGroup?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
