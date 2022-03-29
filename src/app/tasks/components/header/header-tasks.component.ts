import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { StateInterface } from 'src/app/store/reducers';
import * as AppActions from 'src/app/store/actions/';
import { TasksUtilService } from '../../services';

@Component({
  selector: 'app-header-tasks',
  templateUrl: './header-tasks.component.html',
  styleUrls: ['./header-tasks.component.scss']
})
export class HeaderTasksComponent {

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

  markAll(value: boolean): void {
    console.log('markAll', value);
  }
}
