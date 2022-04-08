/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild('inputChild') inputChild: ElementRef;

  @Input()
  set value(newValue: string) {
    if (!newValue) return;
    this.writeValue(newValue);
  }
  get value(): string {
    return '';
  }

  @Input() isDeleteValue?: boolean = false;
  @Input() isEditable = false;

  @Output() onKeyEnter: EventEmitter<string> = new EventEmitter();
  @Output() onBlur: EventEmitter<string> = new EventEmitter();

  formControl: FormControl = new FormControl();

  ngOnInit(): void {
    if (this.value) this.writeValue(this.value);
    if (this.isEditable) this.setDisabledState(this.isEditable);
  }

  dblclick(): void {
    this.formControl.enable();
    this.inputChild.nativeElement.focus();
  }

  onChange = () => {};

  onTouch = () => {};

  writeValue(value: unknown): void {
    this.formControl.setValue(value || '');
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  handleKeyEnter(): void {
    if (this.value !== this.formControl.value)
      this.onKeyEnter.emit(this.formControl.value);
    if (this.isDeleteValue) this.writeValue('');
    if (this.isEditable) this.formControl.disable();
  }

  handleOnBlur(): void {
    if (this.value !== this.formControl.value)
      this.onBlur.emit(this.formControl.value);
    if (this.isEditable) this.formControl.disable();
  }

  handleKeyEscape(): void {
    if (this.value !== this.formControl.value) this.writeValue(this.value);
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}
