import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from '../models/Subject';
import { Teacher } from '../models/Teacher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from '../data/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  public courseForm !: FormGroup;
  public subjects: Subject[] = [];
  public teachers: Teacher[] = [];
  public buttonName: string = "add";
  public labelName: string = "add new course!";

  constructor(private formBuilder: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public editData: any,
     private dialogRef: MatDialogRef<CourseDialogComponent>,
     private service: Service
     ) {
      this.service.getTeachers().
      subscribe(data => this.teachers = data);
      this.service.getSubjects().
      subscribe(data => this.subjects = data);
      }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      subject: ['', Validators.required],
      teacher: ['', Validators.required],
      type: ['', [Validators.required, Validators.maxLength(10),Validators.pattern('^[a-zA-Z ]*$')]],
      duration: ['', [Validators.required, Validators.maxLength(10)]],
      hoursReq: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    })

    if(this.editData){
      this.buttonName = "Update";
      this.labelName = "Edit course!"
      this.courseForm.controls['subject'].setValue(this.editData.subject);
      this.courseForm.controls['teacher'].setValue(this.editData.teacher);
      this.courseForm.controls['type'].setValue(this.editData.type);
      this.courseForm.controls['duration'].setValue(this.editData.duration);
      this.courseForm.controls['hoursReq'].setValue(this.editData.hoursReq);
    }
  }

  getErrorForSubject(): string{
    if(this.courseForm.controls['subject'].hasError('required')){
      return "This field is required!";
    }else return "Invalid input";
  }

  getErrorForTeacher(): string{
    if(this.courseForm.controls['teacher'].hasError('required')){
      return "This field is required!";
    }else return "Invalid input";
  }

  getErrorForType(): string{
    if(this.courseForm.controls['type'].hasError('required')){
      return "This field is required!";
    }else if(this.courseForm.controls['type'].hasError('maxlength')){
      return "Input can be max 10 characters long!";
    }else if(this.courseForm.controls['type'].hasError('pattern')){
      return "Input can only contain letters!"
    }else return "Invalid input";
  }

  getErrorForDuration(): string{
    if(this.courseForm.controls['duration'].hasError('required')){
      return "This field is required!";
    }else if(this.courseForm.controls['duration'].hasError('maxlength')){
      return "Input can be max 10 characters long!";
    }else return "Invalid input";
  }

  getErrorForHoursReq(): string{
    if(this.courseForm.controls['hoursReq'].hasError('required')){
      return "This field is required!";
    }else if(this.courseForm.controls['hoursReq'].hasError('pattern')){
      return "Input has to be a number!";
    }else return "Invalid input";
  }
  
  addCourse() {
    if(!this.editData){
      if (this.courseForm.valid) {
        this.service.addCourse(this.courseForm.value).
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
    this.service.editCourse(this.courseForm.value, this.editData.id).
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
