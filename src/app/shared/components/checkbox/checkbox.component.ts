import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label: string = '';
  @Input() disabled?: boolean;

  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  clickCheckbox(event: MatCheckboxChange): void {
    this.onChange.emit(event.checked);
  }
}
