import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { StateInterface } from 'src/app/store/reducers';
import * as AppActions from 'src/app/store/actions/';
import { TaskInterface } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-footer-tasks',
  templateUrl: './footer-tasks.component.html',
  styleUrls: ['./footer-tasks.component.scss'],
})
export class FooterTasksComponent {
  @Input() set tasks(value: TaskInterface[]) {
    if (!value) return;
    this.tasksIncompleted = value.filter((task) => !task.completed).length;
    this.textCounter = this.tasksIncompleted === 1 ? 'item left' : 'items left';
    this.hasCompletedTasks = value.some((task) => task.completed);
    this.hasActiveTasks = value.some((task) => !task.completed);
  }

  tasksIncompleted = 0;
  textCounter = 'items left';
  buttonActive = '';
  hasCompletedTasks = false;
  hasActiveTasks = false;

  constructor(private store: Store<StateInterface>, private router: Router) {}

  ngOnInit(): void {
    const routes = this.router.url.split('/');
    this.buttonActive = routes[routes.length - 1];
  }

  clearCompleted(): void {
    this.store.dispatch(new AppActions.ClearCompletedTask());
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
