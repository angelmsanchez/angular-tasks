import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title = '';
  @Input() active = false;

  @Output() oneClick: EventEmitter<MouseEvent> = new EventEmitter();

  handleClick(event: MouseEvent): void {
    this.oneClick.emit(event);
  }
}
