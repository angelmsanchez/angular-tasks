import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  CheckboxComponent,
  InputComponent,
  ButtonComponent,
} from './components';

@NgModule({
  declarations: [
    CheckboxComponent,
    InputComponent,
    ButtonComponent,
  ],
  exports: [
    CheckboxComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class SharedModule { }
