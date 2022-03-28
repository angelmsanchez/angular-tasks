import { Action } from '@ngrx/store';

import { TaskInterface } from 'src/app/shared/interfaces';

export const ADD_TASK: string = '[App] Add task';

export class AddTask implements Action {
  type: string = ADD_TASK;
  constructor(public payload: TaskInterface) { }
}
