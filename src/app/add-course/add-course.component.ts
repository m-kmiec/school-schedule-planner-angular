import { Component, OnInit } from '@angular/core';
import { SUBJECTS } from '../database/list-of-subjects';
import { TEACHERS } from '../database/list-of-teachers';
import { Course } from '../models/Course';
import { Subject } from '../models/Subject';
import { Teacher } from '../models/Teacher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../data/courses.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public courseForm !: FormGroup;
  public subjects: Subject[] = SUBJECTS;
  public teachers: Teacher[] = TEACHERS;

  constructor(private formBuilder: FormBuilder, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      subject: ['', Validators.required],
      teacher: ['', Validators.required],
      type: ['', Validators.required],
      duration: ['', Validators.required],
      hoursReq: ['', Validators.required],
    })
  }
  onSubmit() {
    console.log(this.courseForm.value);
    if (this.courseForm.valid) {
      this.coursesService.addCourse(this.courseForm.value).
        subscribe({
          next: (res) => {
            alert("Added course!")
          },
          error: () => {
            alert("Error while adding the course.")
          }
        })
    }
  }
}
