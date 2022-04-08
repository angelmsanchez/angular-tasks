import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MainTasksComponent } from './main-tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskInterface } from 'src/app/shared/interfaces';

describe('MainTasksComponent', () => {
  let component: MainTasksComponent;
  let fixture: ComponentFixture<MainTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [MainTasksComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTasksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the id when get the task element', () => {
    const task: TaskInterface = {
      id: '1',
      completed: false,
      value: 'Task-1',
    };

    const responseFunction = component.trackByMethod(1, task);

    expect(responseFunction).toBe(task.id);
  });
});
