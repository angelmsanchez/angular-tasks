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

  @Output() onChange: EventEmitter<string> = new EventEmitter();

  handleChange(): void {
    if (this.inputRef) {
      this.onChange.emit(this.inputRef?.nativeElement.value);
      this.inputRef.nativeElement.value = '';
    }
  }
}
