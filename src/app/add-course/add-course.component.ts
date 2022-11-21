import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SUBJECTS } from '../database/list-of-subjects';
import { TEACHERS } from '../database/list-of-teachers';
import { Course } from '../models/Course';
import { Subject } from '../models/Subject';
import { Teacher } from '../models/Teacher';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
    public subjects: Subject[] = SUBJECTS;
    public teachers: Teacher[] = TEACHERS;
    public selSub: Subject = this.subjects[0];
    public selTeach: Teacher = this.teachers[0];

    public setSelSub(index: string):void{
      this.selSub = this.subjects[parseInt(index)];
    }

    public setSelTeacher(index: string):void{
      this.selTeach = this.teachers.find(t => t.surrname == index) as Teacher;
    }
    onSubmit(f: NgForm){
      let course = new Course(this.selSub,this.selTeach,f.value.startsAt,f.value.endsAt,f.value.hoursReq);
       
    }
}
