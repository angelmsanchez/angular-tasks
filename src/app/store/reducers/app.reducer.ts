import { ActionInterface } from 'src/app/store/interfaces';
import * as AppActions from 'src/app/store/actions/app.action';
import { TaskInterface } from 'src/app/shared/interfaces';

export interface State {
  tasks: TaskInterface[];
}

const initialState: State = {
  tasks: [],
};

export function reducer(state: State = initialState, action: ActionInterface): State {
  switch (action.type) {
    case AppActions.ADD_TASK:
      return {
        ...state,
        tasks: [
          action.payload,
          ...state.tasks
        ],
      };
    default:
      return state;
  }
}
