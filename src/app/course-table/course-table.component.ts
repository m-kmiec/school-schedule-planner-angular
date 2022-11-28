import { Component, Input, OnInit, SimpleChange } from '@angular/core';
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

  plan: any = [];

  displayedColumns: string[] = ['day', 'firstTimestamp', 'secondTimestamp', 'thirdTimestamp', 'fourthTimestamp', 'fifthTimestamp', 'sixthTimestamp', 'seventhTimestamp', 'action']

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.service.getPlanForGroup(this.studentGroup).
      subscribe(data => this.plan = data);
  }

  onSelectionChange() {
    this.dialog.open(SelectCourseForTimestampComponent, {
      width: '30%',
      data: this.studentGroup
    }).afterClosed().subscribe(val => {
      this.service.getPlanForGroup(this.studentGroup).
        subscribe(data => this.plan = data);
    })
  } 

  deleteCourse(id : number) {
    this.service.deletePlan(id).
      subscribe({
        next:(res) => {
          alert('Record deleted succesfully');
          this.service.getPlanForGroup(this.studentGroup).
            subscribe(data => this.plan = data);
        },
        error:() => {
          alert('Error deleting the record');
        }
      })
  }
  
}
