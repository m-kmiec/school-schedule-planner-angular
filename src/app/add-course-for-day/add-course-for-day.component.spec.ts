import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseForDayComponent } from './add-course-for-day.component';

describe('AddCourseForDayComponent', () => {
  let component: AddCourseForDayComponent;
  let fixture: ComponentFixture<AddCourseForDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseForDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseForDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
