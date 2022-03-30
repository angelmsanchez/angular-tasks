import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';

import { FooterTasksComponent } from './footer-tasks.component';
import { reducers } from 'src/app/store/reducers';
import { SharedModule } from 'src/app/shared/shared.module';

describe('FooterTasksComponent', () => {
  let component: FooterTasksComponent;
  let fixture: ComponentFixture<FooterTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        SharedModule,
        RouterTestingModule,
      ],
      declarations: [
        FooterTasksComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTasksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
