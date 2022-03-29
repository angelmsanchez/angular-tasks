import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  ListTasksComponent,
  ActiveTasksComponent,
  IndexTasksComponent,
  CompletedTasksComponent,
} from './pages';
import {
  HeaderTasksComponent,
  FooterTasksComponent,
  MainTasksComponent,
  RowTaskComponent,
} from './components';
import { TasksUtilService } from './services';

@NgModule({
  declarations: [
    // pages
    ListTasksComponent,
    ActiveTasksComponent,
    IndexTasksComponent,
    CompletedTasksComponent,
    // components
    HeaderTasksComponent,
    FooterTasksComponent,
    MainTasksComponent,
    RowTaskComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
  ],
  providers: [
    TasksUtilService,
  ]
})
export class TasksModule { }
