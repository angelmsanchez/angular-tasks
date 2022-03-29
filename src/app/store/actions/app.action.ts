import { Action } from '@ngrx/store';

import { TaskInterface } from 'src/app/shared/interfaces';

export const ADD_TASK: string = '[App] Add task';
export const UPDATE_TASK: string = '[App] Update task';
export const DELETE_TASK: string = '[App] Delete task';

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
