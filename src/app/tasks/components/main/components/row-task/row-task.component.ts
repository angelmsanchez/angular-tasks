import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { TaskInterface } from 'src/app/shared/interfaces';
import { StateInterface } from 'src/app/store/reducers';
import * as AppActions from 'src/app/store/actions/';

@Component({
  selector: 'app-row-task',
  templateUrl: './row-task.component.html',
  styleUrls: ['./row-task.component.scss'],
})
export class RowTaskComponent {
  @Input() task: TaskInterface;

  constructor(private store: Store<StateInterface>) {}

  handleCheck(value: boolean): void {
    this.store.dispatch(
      new AppActions.UpdateTask({
        ...this.task,
        completed: value,
      })
    );
  }

  handleChangeInput(value: string): void {
    if (!value) {
      this.handleDelete();
      return;
    }
    this.store.dispatch(
      new AppActions.UpdateTask({
        ...this.task,
        value,
      })
    );
  }

  handleDelete(): void {
    this.store.dispatch(new AppActions.DeleteTask(this.task));
  }
}
