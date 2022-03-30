import { Component, Input } from '@angular/core';
import { TaskInterface } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-main-tasks',
  templateUrl: './main-tasks.component.html',
  styleUrls: ['./main-tasks.component.scss']
})
export class MainTasksComponent {
  @Input() tasks?: TaskInterface[];

  trackByMethod(index: number, element: TaskInterface): string {
    return element.id;
  }
}
