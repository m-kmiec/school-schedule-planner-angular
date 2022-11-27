import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from '../data/data.service';
import { Course } from '../models/Course';


@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.css']
})
export class GroupDialogComponent implements OnInit {
  public groupForm !: FormGroup;
  public courses: Course[] = [];
  public courseForm = new FormControl();

  constructor(private formBuilder: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public editData: any,
     private dialogRef: MatDialogRef<GroupDialogComponent>,
     private service: Service
     ) {
      this.service.getCourses().
      subscribe(data => {
        this.courses = data;
        this.courses = this.courses.filter(e => e.subject.mandatory == false );
      });
      }

  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      name: ['', Validators.required],
      courses: ['', Validators.required]
    })

    if(this.editData){
      this.groupForm.controls['name'].setValue(this.editData.name);
      this.groupForm.controls['courses'].setValue(this.editData.courses);
    }
  }
  addGroup() {
    if(!this.editData){
      if (this.groupForm.valid) {
        this.service.addCourse(this.groupForm.value).
          subscribe({
            next: (res) => {
              alert("Added group!")
              this.groupForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert("Error while adding the group.")
            }
          })
      }
    }else{
      this.updateGroup();
    }
    
  }
  updateGroup(){
    this.service.editCourse(this.groupForm.value, this.editData.id).
    subscribe({
      next: (res) => {
        alert("Edit group!");
        this.groupForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while editing the course.")
      }
    })
  }

}
