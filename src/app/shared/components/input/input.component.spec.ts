import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [InputComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send then event when click the checkbox', () => {
    spyOn(component.onKeyEnter, 'emit');

    component.handleKeyEnter();

    expect(component.onKeyEnter.emit).toHaveBeenCalled();
  });

  it('should send then event when click the checkbox', () => {
    spyOn(component.onBlur, 'emit');

    component.handleOnBlur();

    expect(component.onBlur.emit).toHaveBeenCalled();
  });
});
