import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDialogComponent } from './course-dialog.component';

describe('AddCourseComponent', () => {
  let component: CourseDialogComponent;
  let fixture: ComponentFixture<CourseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
