import { Component, OnDestroy, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { TaskInterface } from 'src/app/shared/interfaces';
import { StateInterface } from 'src/app/store/reducers';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.scss']
})
export class ActiveTasksComponent implements OnInit {
  tasks: TaskInterface[] = [];
  tasksFilter: TaskInterface[] = [];

  private subscriptionTasks: Subscription = new Subscription;

  constructor(
    private store: Store<StateInterface>,
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  ngOnDestroy(): void {
    if (this.subscriptionTasks) this.subscriptionTasks.unsubscribe();
  }

  private getTasks(): void {
    this.subscriptionTasks = this.store.pipe(
      select(store => store.app.tasks))
      .subscribe(tasks => {
        this.tasks = [...tasks];
        this.tasksFilter = [...tasks.filter(task => !task.completed)];
      });
  }
}
