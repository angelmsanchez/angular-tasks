import {
  Component,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  handleClick(event: any): void {
    this.onClick.emit(event);
  }
}
