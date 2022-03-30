import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { StateInterface } from 'src/app/store/reducers';
import * as AppActions from 'src/app/store/actions/';
import { TaskInterface } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-footer-tasks',
  templateUrl: './footer-tasks.component.html',
  styleUrls: ['./footer-tasks.component.scss']
})
export class FooterTasksComponent implements OnChanges {
  @Input() tasks: TaskInterface[] = [];

  tasksIncompleted: number = 0;
  textCounter: string = 'items left';
  buttonActive: string = '';
  hasCompletedTasks: boolean = false;
  hasActiveTasks: boolean = false;

  constructor(
    private store: Store<StateInterface>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const routes = this.router.url.split('/')
    this.buttonActive = routes[routes.length - 1];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks'] && changes['tasks'].currentValue !== changes['tasks'].previousValue) {
      this.tasksIncompleted = this.tasks.filter(task => !task.completed).length;
      this.textCounter = this.tasksIncompleted === 1 ? 'item left' : 'items left';
      this.hasCompletedTasks = this.tasks.some(task => task.completed);
      this.hasActiveTasks = this.tasks.some(task => !task.completed);
    }
  }

  clearCompleted(): void {
    this.store.dispatch(new AppActions.ClearCompletedTask());
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
