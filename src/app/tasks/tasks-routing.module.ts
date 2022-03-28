import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ListTasksComponent,
  ActiveTasksComponent,
  CompletedTasksComponent,
  IndexTasksComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: IndexTasksComponent,
    children: [
      {
        path: '',
        component: ListTasksComponent,
      },
      {
        path: 'active',
        component: ActiveTasksComponent,
      },
      {
        path: 'completed',
        component: CompletedTasksComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
