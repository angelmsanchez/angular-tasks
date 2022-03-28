import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-tasks',
  templateUrl: './header-tasks.component.html',
  styleUrls: ['./header-tasks.component.scss']
})
export class HeaderTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeInput(value: string): void {
    console.log('handleChangeInput', value);
  }

}
