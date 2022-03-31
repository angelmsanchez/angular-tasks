import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Store, StoreModule } from '@ngrx/store';

import { HeaderTasksComponent } from './header-tasks.component';
import { reducers } from 'src/app/store/reducers';
import { TasksUtilService } from '../../services';
import { SharedModule } from 'src/app/shared/shared.module';
import * as AppActions from 'src/app/store/actions/';

describe('HeaderTasksComponent', () => {
  let component: HeaderTasksComponent;
  let fixture: ComponentFixture<HeaderTasksComponent>;
  let injector: Injector;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        SharedModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        HeaderTasksComponent,
      ],
      providers: [
        TasksUtilService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    injector = getTestBed();
    store = injector.get(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTasksComponent);
    component = fixture.componentInstance;
    spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should changes the checkbox property when changes tasks imcompleted', () => {
    const tasks = [{
      id: '1',
      completed: false,
      value: 'Task-1',
    }];
    const changes: any = {
      tasks: {
        previousValue: [],
        currentValue: tasks,
      }
    };
    component.tasks = tasks;

    component.ngOnChanges(changes);

    expect(component.checkedMarkAll).toBeFalsy();
  });

  it('should changes the checkbox property when changes tasks completed', () => {
    const tasks = [{
      id: '1',
      completed: true,
      value: 'Task-1',
    }];
    const changes: any = {
      tasks: {
        previousValue: [],
        currentValue: tasks,
      }
    };
    component.tasks = tasks;

    component.ngOnChanges(changes);

    expect(component.checkedMarkAll).toBeTruthy();
  });
  
  it('should not change the state when change the input and the value is empty', () => {
    const value = '';

    component.handleChangeInput(value);

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('should change the state when change the input', () => {
    const value = 'newTask';

    component.handleChangeInput(value);

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should change the state global cleaning the completed tasks', () => {
    const checked = true;
    const action = new AppActions.MarkAllCompletedTask(checked);

    component.markAll(checked);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
