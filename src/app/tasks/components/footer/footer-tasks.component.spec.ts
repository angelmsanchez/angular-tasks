import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { Store, StoreModule } from '@ngrx/store';

import { FooterTasksComponent } from './footer-tasks.component';
import { reducers } from 'src/app/store/reducers';
import { SharedModule } from 'src/app/shared/shared.module';
import * as AppActions from 'src/app/store/actions/';

describe('FooterTasksComponent', () => {
  let component: FooterTasksComponent;
  let fixture: ComponentFixture<FooterTasksComponent>;
  let injector: Injector;
  let router: Router;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        SharedModule,
        RouterTestingModule,
      ],
      declarations: [
        FooterTasksComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    injector = getTestBed();
    router = injector.get(Router);
    store = injector.get(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTasksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should active the button "All" when init the App', () => {
    component.ngOnInit();

    expect(component.buttonActive).toEqual('');
  });

  it('should changes properties App when changes tasks imcompleted', () => {
    const tasks = [{
      id: '1',
      completed: false,
      value: 'Task-1',
    }];
    component.tasks = tasks;

    expect(component.tasksIncompleted).toEqual(1);
    expect(component.textCounter).toEqual('item left');
    expect(component.hasCompletedTasks).toBeFalsy();
    expect(component.hasActiveTasks).toBeTruthy();
  });

  it('should changes properties App when changes tasks completed', () => {
    const tasks = [{
      id: '1',
      completed: true,
      value: 'Task-1',
    }];
    component.tasks = tasks;


    expect(component.tasksIncompleted).toEqual(0);
    expect(component.textCounter).toEqual('items left');
    expect(component.hasCompletedTasks).toBeTruthy();
    expect(component.hasActiveTasks).toBeFalsy();
  });

  it('should not changes properties App when enter in the changes', () => {
    expect(component.tasksIncompleted).toEqual(0);
    expect(component.textCounter).toEqual('items left');
    expect(component.hasCompletedTasks).toBeFalsy();
    expect(component.hasActiveTasks).toBeFalsy();
  });

  it('should change the state global cleaning the completed tasks', () => {
    const action = new AppActions.ClearCompletedTask();
    spyOn(store, 'dispatch');

    component.clearCompleted();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should navigate when push the button', () => {
    spyOn(router, 'navigate');
    const route = '/tasks/active';

    component.navigateTo(route);

    expect(router.navigate).toHaveBeenCalledWith([route]);
  });
});
