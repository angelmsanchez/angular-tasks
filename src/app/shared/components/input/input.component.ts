import {
  Component,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild('inputChild') inputChild: ElementRef;

  @Input() value?: string = '';
  @Input() isDeleteValue?: boolean = false;
  @Input() isEditable: boolean = false;

  @Output() onKeyEnter: EventEmitter<string> = new EventEmitter();
  @Output() onBlur: EventEmitter<string> = new EventEmitter();

  formControl: FormControl = new FormControl();

  ngOnInit(): void {
    if (this.value) this.writeValue(this.value);
    if (this.isEditable) this.setDisabledState(this.isEditable);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && changes['value'].currentValue !== changes['value'].previousValue) {
      this.writeValue(this.value);
    }
  }

  dblclick(): void {
    this.formControl.enable();
    this.inputChild.nativeElement.focus();
  }

  onChange = (_: any) => { };

  onTouch = () => { };

  writeValue(value: any): void {
    this.formControl.setValue(value || '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  handleKeyEnter(): void {
    if (this.value !== this.formControl.value) this.onKeyEnter.emit(this.formControl.value);
    if (this.isDeleteValue) this.writeValue('');
    if (this.isEditable) this.formControl.disable();
  }

  handleOnBlur(): void {
    if (this.value !== this.formControl.value) this.onBlur.emit(this.formControl.value);
    if (this.isEditable) this.formControl.disable();
  }

  handleKeyEscape(): void {
    if (this.value !== this.formControl.value) this.writeValue(this.value);
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}
