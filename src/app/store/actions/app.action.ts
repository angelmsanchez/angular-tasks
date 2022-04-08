import { Action } from '@ngrx/store';

import { TaskInterface } from 'src/app/shared/interfaces';

export const ADD_TASK = '[App] Add task';
export const UPDATE_TASK = '[App] Update task';
export const DELETE_TASK = '[App] Delete task';
export const CLEAR_COMPLETED_TASKS = '[App] Clear compoleted tasks';
export const MARK_ALL_COMPLETED_TASKS = '[App] Mark All completed tasks';

export class AddTask implements Action {
  type: string = ADD_TASK;
  constructor(public payload: TaskInterface) { }
}

export class UpdateTask implements Action {
  type: string = UPDATE_TASK;
  constructor(public payload: TaskInterface) { }
}

export class DeleteTask implements Action {
  type: string = DELETE_TASK;
  constructor(public payload: TaskInterface) { }
}

export class ClearCompletedTask implements Action {
  type: string = CLEAR_COMPLETED_TASKS;
}

export class MarkAllCompletedTask implements Action {
  type: string = MARK_ALL_COMPLETED_TASKS;
  constructor(public payload: boolean) { }
}
