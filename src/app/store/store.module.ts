import { ModuleWithProviders, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class TaskStoreModule {
  static forRoot(): ModuleWithProviders<any> { return { ngModule: TaskStoreModule }; }
}
