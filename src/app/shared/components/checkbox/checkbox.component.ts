/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() title = '';
  @Input() checked = false;

  @Output() check: EventEmitter<boolean> = new EventEmitter();

  formControl: FormControl = new FormControl();

  onChange = () => {};
  onTouch = () => {};

  ngOnInit(): void {
    this.writeValue(this.checked);
  }

  writeValue(value: boolean): void {
    this.formControl.setValue(value || false);
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  clickCheckbox(event: MatCheckboxChange): void {
    this.check.emit(event.checked);
  }
}
