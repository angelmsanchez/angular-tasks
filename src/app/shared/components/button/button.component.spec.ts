import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send then event when click the button', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event: any = {};
    spyOn(component.oneClick, 'emit');

    component.handleClick(event);

    expect(component.oneClick.emit).toHaveBeenCalled();
  });
});
