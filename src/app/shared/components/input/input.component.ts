import {
  Component, Input, SimpleChanges, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() onChangeEvent: EventEmitter<any> = new EventEmitter();

  handleEnter(value: string): void {
    console.log('applyFilter', value);
    if (value) this.onChangeEvent.emit(value);
  }
}
