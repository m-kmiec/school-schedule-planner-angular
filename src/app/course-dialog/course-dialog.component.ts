import { Component, OnInit, Inject } from '@angular/core';
import { SUBJECTS } from '../database/list-of-subjects';
import { TEACHERS } from '../database/list-of-teachers';
import { Subject } from '../models/Subject';
import { Teacher } from '../models/Teacher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../data/courses.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  public courseForm !: FormGroup;
  public subjects: Subject[] = SUBJECTS;
  public teachers: Teacher[] = TEACHERS;

  constructor(private formBuilder: FormBuilder,
     private coursesService: CoursesService,
     @Inject(MAT_DIALOG_DATA) public editData: any,
     private dialogRef: MatDialogRef<CourseDialogComponent>
     ) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      subject: ['', Validators.required],
      teacher: ['', Validators.required],
      type: ['', Validators.required],
      duration: ['', Validators.required],
      hoursReq: ['', Validators.required],
    })

    if(this.editData){
      this.courseForm.controls['subject'].setValue(this.editData.subject);
      this.courseForm.controls['teacher'].setValue(this.editData.teacher);
      this.courseForm.controls['type'].setValue(this.editData.type);
      this.courseForm.controls['duration'].setValue(this.editData.duration);
      this.courseForm.controls['hoursReq'].setValue(this.editData.hoursReq);
    }
  }
  addCourse() {
    if(!this.editData){
      if (this.courseForm.valid) {
        this.coursesService.addCourse(this.courseForm.value).
          subscribe({
            next: (res) => {
              alert("Added course!")
              this.courseForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error while adding the course.")
            }
          })
      }
    }else{
      this.updateCourse();
    }
    
  }
  updateCourse(){
    this.coursesService.editCourse(this.courseForm.value, this.editData.id).
    subscribe({
      next: (res) => {
        alert("Edit course!");
        this.courseForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while editing the course.")
      }
    })
  }
}
