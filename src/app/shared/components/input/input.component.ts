import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @ViewChild('inputRef', { static: false }) inputRef: ElementRef | undefined;
  @Input() value: string = '';

  @Output() onKeyEnter: EventEmitter<string> = new EventEmitter();
  @Output() onBlur: EventEmitter<string> = new EventEmitter();

  handleKeyEnter(): void {
    if (this.inputRef) {
      this.onKeyEnter.emit(this.inputRef?.nativeElement.value);
      this.inputRef.nativeElement.value = '';
    }
  }

  handleOnBlur(): void {
    if (this.onBlur && this.inputRef) {
      this.onBlur.emit(this.inputRef?.nativeElement.value);
      this.inputRef.nativeElement.value = '';
    }
  }
}
