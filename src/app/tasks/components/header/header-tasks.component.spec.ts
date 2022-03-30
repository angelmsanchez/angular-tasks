import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { HeaderTasksComponent } from './header-tasks.component';
import { reducers } from 'src/app/store/reducers';
import { TasksUtilService } from '../../services';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HeaderTasksComponent', () => {
  let component: HeaderTasksComponent;
  let fixture: ComponentFixture<HeaderTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        SharedModule,
      ],
      declarations: [
        HeaderTasksComponent,
      ],
      providers: [
        TasksUtilService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
