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
          ...state.tasks,
        ],
      };
    case AppActions.UPDATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
        ],
      };
    case AppActions.DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter(task => task.id !== action.payload.id),
        ],
      };
    case AppActions.CLEAR_COMPLETED_TASKS:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter(task => !task.completed),
        ],
      };
    case AppActions.MARK_ALL_COMPLETED_TASKS:
      return {
        ...state,
        tasks: [
          ...state.tasks.map(task => ({ ...task, completed: action.payload })),
        ],
      };
    default:
      return state;
  }
}
