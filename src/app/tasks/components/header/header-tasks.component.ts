import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { StateInterface } from 'src/app/store/reducers';
import * as AppActions from 'src/app/store/actions/';
import { TasksUtilService } from '../../services';
import { TaskInterface } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header-tasks',
  templateUrl: './header-tasks.component.html',
  styleUrls: ['./header-tasks.component.scss']
})
export class HeaderTasksComponent {
  @Input()
  set tasks(value: TaskInterface[]) {
    if (!value) return;
    this.checkedMarkAll = value.every((task: TaskInterface) => task.completed);
  }
  get tasks(): TaskInterface[] {
    return [];
  }

  checkedMarkAll: boolean = false;

  constructor(
    private store: Store<StateInterface>,
    private tasksUtilService: TasksUtilService,
  ) { }

  handleChangeInput(value: string): void {
    if (value) {
      this.store.dispatch(new AppActions.AddTask({
        id: this.tasksUtilService.getGuid(),
        value,
        completed: false,
      }));
    }
  }

  markAll(checked: boolean): void {
    this.store.dispatch(new AppActions.MarkAllCompletedTask(checked));
  }
}
