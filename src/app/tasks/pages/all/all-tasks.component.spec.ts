import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';

import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { AllTasksComponent } from './all-tasks.component';
import { reducers } from 'src/app/store/reducers';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskInterface } from 'src/app/shared/interfaces';

describe('AllTasksComponent', () => {
  let component: AllTasksComponent;
  let fixture: ComponentFixture<AllTasksComponent>;
  let injector: Injector;
  let store: Store;

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
    injector = getTestBed();
    store = injector.get(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTasksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get tasks empty from store when init the component', () => {
    const value: TaskInterface[] = [];
    spyOn(store, 'select').and.returnValue(of(value));

    component.ngOnInit();

    expect(component.tasks).toEqual(value);
  });
});
