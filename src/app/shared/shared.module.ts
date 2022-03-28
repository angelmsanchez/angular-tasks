import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { CheckboxComponent, InputComponent } from './components';

@NgModule({
  declarations: [
    CheckboxComponent,
    InputComponent,
  ],
  exports: [
    CheckboxComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatInputModule,
  ],
})
export class SharedModule { }
