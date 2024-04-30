import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPopupComponent } from './task-list-popup.component';

describe('TaskListPopupComponent', () => {
  let component: TaskListPopupComponent;
  let fixture: ComponentFixture<TaskListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
