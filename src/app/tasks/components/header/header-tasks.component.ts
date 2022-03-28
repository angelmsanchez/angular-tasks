import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { StateInterface } from 'src/app/store/reducers';
import * as AppActions from 'src/app/store/actions/';

@Component({
  selector: 'app-header-tasks',
  templateUrl: './header-tasks.component.html',
  styleUrls: ['./header-tasks.component.scss']
})
export class HeaderTasksComponent {

  constructor(
    private store: Store<StateInterface>,
  ) { }

  handleChangeInput(value: string): void {
    this.store.dispatch(new AppActions.AddTask({ value, active: false, completed: false }));
  }

  markAll(value: any): void {
    console.log('markAll', value);
  }
}
