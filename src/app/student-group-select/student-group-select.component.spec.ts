import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupSelectComponent } from './student-group-select.component';

describe('StudentGroupSelectComponent', () => {
  let component: StudentGroupSelectComponent;
  let fixture: ComponentFixture<StudentGroupSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGroupSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGroupSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
