import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Service } from '../data/data.service';
import { GroupDialogComponent } from '../group-dialog/group-dialog.component';
import { Course } from '../models/Course';
import { StudentGroup } from '../models/studentsGroup';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: StudentGroup[] = [];
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (group: StudentGroup) => `${group.name}`,
    },
    {
      columnDef: 'courses',
      header: 'Courses',
      cell: (course: Course) => `${course.subject.name}`,
    }
  ];
  displayedColumns: any[] = []; 
  constructor(
    private dialog: MatDialog,
    private service: Service
     ){}


    ngOnInit(){
      this.service.getStudentGroups().
        subscribe(data => this.groups = data);
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }


  openDialog(){
    this.dialog.open(GroupDialogComponent, {
      width: "30%"
    }).afterClosed().subscribe(val =>{
      if(val ==='save'){
        this.service.getStudentGroups().
        subscribe(data => this.groups = data);
      }
    })
  }

  editCourse(row: any){
    this.dialog.open(GroupDialogComponent,{
      width: '30%',
      data:row
    }).afterClosed().subscribe(val =>{
      if(val ==='update'){
        this.service.getStudentGroups().
        subscribe(data => this.groups = data);
      }
    })
  }

  deleteCourse(id:number){
    this.service.deleteCourse(id)
    .subscribe({
      next: (res) => {
        alert("Group was deleted!");
        this.service.getStudentGroups().
        subscribe(data => this.groups = data);
      },
      error: () => {
        alert("Error while deleting the group.")
      }
    })
  }

}
