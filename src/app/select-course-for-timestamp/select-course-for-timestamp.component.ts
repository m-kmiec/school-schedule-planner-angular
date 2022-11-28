import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, of } from 'rxjs';
import { Service } from '../data/data.service';
import { Course } from '../models/Course';
import { StudentGroup } from '../models/studentsGroup';
import { Subject } from '../models/Subject';
import { Teacher } from '../models/Teacher';

@Component({
  selector: 'app-select-course-for-timestamp',
  templateUrl: './select-course-for-timestamp.component.html',
  styleUrls: ['./select-course-for-timestamp.component.css']
})
export class SelectCourseForTimestampComponent implements OnInit {

  courses: any[] = [];
  additionalCourses !: any[];
  studentGroups: StudentGroup[] = [];
  courseForm !: FormGroup;
  studentGroup !: StudentGroup;
  days: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public studentGroupName: any,
    private service : Service,
    private formBuilder : FormBuilder,
    private dialogRef : MatDialogRef<SelectCourseForTimestampComponent>,
    ) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      studentGroup: ['', Validators.required],
      day: ['', Validators.required],
      firstTimestamp: ['8:00 - 8:45', Validators.required],
      secondTimestamp: ['8:55 - 9:40', Validators.required],
      thirdTimestamp: ['9:50 - 10:35', Validators.required],
      fourthTimestamp: ['10:55 - 11:40', Validators.required],
      fifthTimestamp: ['11:50 - 12:35', Validators.required],
      sixthTimestamp: ['12:45 - 13:30', Validators.required],
      seventhTimestamp: ['13:40 - 14:25', Validators.required],
    });

    this.service.getDays().
        subscribe(data => this.days = data);

    this.service.getAdditionalCourses(this.studentGroupName).
        subscribe(data => {
          this.studentGroup = data;
          this.additionalCourses = data[0].additionalCourses;
        });

    this.service.getCourses().
      subscribe(data => {
        this.courses = data;
        this.courses = this.courses.filter(c => c.subject.isMandatory === true);
        this.courses = [...this.courses, ...this.additionalCourses];
        this.courses.push(new Course(new Subject("","",false), {} as Teacher,"",0,0));
      });

    this.service.getStudentGroups().
      subscribe(data => this.studentGroups = data);

  }

  addTimestamp(): void {
    if (this.courseForm.valid) {
      this.service.postPlan(this.courseForm.value)
      .subscribe({
        next:(res) => {
          alert("Plan for day added succesfuly");
          this.dialogRef.close('save');
        },
        error:() => {
          alert("Error while adding the schedule");
        } 
      });

    }
  }

}
