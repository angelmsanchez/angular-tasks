import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AllTasksComponent,
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
        component: AllTasksComponent,
      },
      {
        path: 'active',
        component: ActiveTasksComponent,
      },
      {
        path: 'completed',
        component: CompletedTasksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
