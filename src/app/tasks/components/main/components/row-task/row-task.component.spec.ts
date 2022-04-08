import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { RowTaskComponent } from './row-task.component';
import { reducers } from 'src/app/store/reducers';

describe('RowTaskComponent', () => {
  let component: RowTaskComponent;
  let fixture: ComponentFixture<RowTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers)],
      declarations: [RowTaskComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowTaskComponent);
    component = fixture.componentInstance;
    component.task = {
      value: 'task-1',
      id: '1',
      completed: false,
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
