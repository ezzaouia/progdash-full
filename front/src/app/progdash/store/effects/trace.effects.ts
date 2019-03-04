import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { DashActionTypes } from '../actions';
import { TraceService } from '../../services/trace.service';

/**
 * Effect to collecte all traces (users' interactions)
 * needed for the experiment.
 * The methods must be passive { dispatch: false },
 * the main task is to listen and call LogfileService.
 * This is very practical as we can listen for ngrx
 * dispatched actions that we want to log in one bit.
 */
@Injectable()
export class TraceEffects {
  constructor (
    private actions$: Actions,
    private traceService: TraceService
  ) {}

  @Effect({ dispatch: false })
  TraceActions$: Observable<Action> = this.actions$.pipe(
    ofType(
      // DATA
      DashActionTypes.LoadData,
      DashActionTypes.LoadDataSuccess,
      DashActionTypes.RunDataPrepComplete,

      // VIEWS
      DashActionTypes.SelectClass,
      DashActionTypes.SelectTimescale,
      DashActionTypes.OpenProgTable,
      DashActionTypes.OpenProgBoard,

      // PRINT REPORT
      DashActionTypes.StartPrintReport,
      DashActionTypes.ClosePrintReport,
      DashActionTypes.CheckWidget,
      DashActionTypes.PrintReport,
      DashActionTypes.PrintReportSuccess,
      DashActionTypes.PrintReportFailure,

      // PV LIVE
      DashActionTypes.CheckRule,
      DashActionTypes.LaunchPVLive,
      DashActionTypes.CancelPVLive,

      // TABLE
      DashActionTypes.SortColumn,
      DashActionTypes.FilterColumn,

      // User dialog
      DashActionTypes.OpenUserDialog,
      DashActionTypes.MoreRuleClick
      // ...,
      // ...,
      // ...,
      // ...,
    ),
    tap( action => {
      console.log( '***TRACE***', action );

      this.traceService.createTrace( action );
    })
  );

  @Effect({ dispatch: false })
  debounceActions$: Observable<Action> = this.actions$.pipe(
    ofType( DashActionTypes.HoverWidget ),
    throttleTime( 5 * 60 * 1000 ),
    tap( action => {
      console.log( '***TRACE***', action );

      this.traceService.createTrace( action );
    })
  );
}
