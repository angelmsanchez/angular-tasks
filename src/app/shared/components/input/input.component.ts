import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('inputRef', { static: false }) inputRef: ElementRef | undefined;

  @Output() onChange: EventEmitter<string> = new EventEmitter();

  handleEnter(): void {
    const value = this.inputRef?.nativeElement.value;
    if (this.inputRef && value) {
      this.onChange.emit(value);
      this.inputRef.nativeElement.value = '';
    }
  }
}
