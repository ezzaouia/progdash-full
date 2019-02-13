import { NgModule } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material';
import { VisualizationModule } from '../visualization';
import { TableRoutingModule } from './table.routes';

import { fromComponents } from './components';


@NgModule({
  imports: [
    SharedModule,

    DynamicModule,

    MaterialModule,
    VisualizationModule,
    TableRoutingModule,
  ],
  declarations: [ ...fromComponents ],
  exports: [ ...fromComponents ],
})
export class TableModule { }
