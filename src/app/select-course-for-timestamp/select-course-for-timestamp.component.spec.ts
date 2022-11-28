import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCourseForTimestampComponent } from './select-course-for-timestamp.component';

describe('SelectCourseForTimestampComponent', () => {
  let component: SelectCourseForTimestampComponent;
  let fixture: ComponentFixture<SelectCourseForTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCourseForTimestampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCourseForTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
