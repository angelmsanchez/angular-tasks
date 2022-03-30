import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() title: string = '';
  @Input() checked: boolean = false;

  @Output() onChecked: EventEmitter<boolean> = new EventEmitter();

  formControl: FormControl = new FormControl();

  onChange = (_: any) => { };
  onTouch = () => { };

  ngOnInit(): void {
    this.writeValue(this.checked);
  }

  writeValue(value: any): void {
    this.formControl.setValue(value || false);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  clickCheckbox(event: MatCheckboxChange): void {
    this.onChecked.emit(event.checked);
  }
}
