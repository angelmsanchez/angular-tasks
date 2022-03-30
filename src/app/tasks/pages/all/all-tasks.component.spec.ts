import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AllTasksComponent } from './all-tasks.component';
import { reducers } from 'src/app/store/reducers';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AllTasksComponent', () => {
  let component: AllTasksComponent;
  let fixture: ComponentFixture<AllTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        SharedModule,
      ],
      declarations: [
        AllTasksComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTasksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});