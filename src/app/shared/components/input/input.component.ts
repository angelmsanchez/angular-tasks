import {
  Component,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inputChild') inputChild: ElementRef;

  @Input()
  set value(newValue: string) {
    if (!newValue) return;
    this.#value = newValue;
    this.writeValue(newValue);
  }
  get value(): string {
    return this.#value;
  }

  @Input() isDeleteValue?: boolean = false;
  @Input() isEditable = false;

  @Output() keyEnter: EventEmitter<string> = new EventEmitter();
  @Output() blurInput: EventEmitter<string> = new EventEmitter();

  formControl: FormControl = new FormControl();
  #value: string = '';

  ngOnInit(): void {
    if (this.value) this.writeValue(this.value);
    if (this.isEditable) this.setDisabledState(this.isEditable);
  }

  dblclick(): void {
    this.formControl.enable();
    this.inputChild.nativeElement.focus();
  }

  onChange = () => { };

  onTouch = () => { };

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
      this.keyEnter.emit(this.formControl.value);
    if (this.isDeleteValue) this.writeValue('');
    if (this.isEditable) this.formControl.disable();
  }

  handleOnBlur(): void {
    if (this.value !== this.formControl.value)
      this.blurInput.emit(this.formControl.value);
    if (this.isEditable) this.formControl.disable();
  }

  handleKeyEscape(): void {
    if (this.value !== this.formControl.value) this.writeValue(this.value);
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}
