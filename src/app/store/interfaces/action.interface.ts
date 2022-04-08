import { Action } from '@ngrx/store';

export interface ActionInterface extends Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
