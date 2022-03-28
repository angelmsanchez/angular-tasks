import { ActionReducerMap } from '@ngrx/store';

import * as fromApp from './app.reducer';

export interface StateInterface {
  app: fromApp.State;
}

export const reducers: ActionReducerMap<StateInterface> = {
  app: fromApp.reducer,
};
