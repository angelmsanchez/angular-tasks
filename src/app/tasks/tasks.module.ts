import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  AllTasksComponent,
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
    AllTasksComponent,
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
    MatIconModule,
  ],
  providers: [
    TasksUtilService,
  ],
})
export class TasksModule { }
