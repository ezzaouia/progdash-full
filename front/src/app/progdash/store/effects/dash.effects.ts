import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { switchMap, map, tap, catchError, withLatestFrom , delay } from 'rxjs/operators';
import { select, Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { startsWith, filter, size } from 'lodash';
import { saveAs } from 'file-saver';

import { DataService } from '../../../shared/services';
import { dataPrep, filename } from '../../utils/data.prep';
import { cast } from '../../utils/mappers';
import {
  LoadData,
  DashActionTypes,
  LoadDataSuccess,
  RunDataPrepComplete,
  LaunchPVLive,
  CheckWidget,
  PrintReport,
  PrintReportFailure,
  PrintReportSuccess,
  StartPrintReport,
  HotPrintWidget,
} from '../actions';
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';

import * as fromStore from '..';
import { a4WidgetsStyles, copyComputedStyle } from '../../utils/html2pdf.utils';

@Injectable()
export class DashEffects {

  tmpPdfContainer: Element = null;

  constructor (
    private actions$: Actions,
    private dataService: DataService,
    private router: Router,
    private store: Store<fromStore.State>
  ) {
    this.tmpPdfContainer = document.createElement( 'div' );
    this.tmpPdfContainer.setAttribute( 'id',  'pdf-container' );
    this.tmpPdfContainer.setAttribute( 'style', `display: none;` );
    document.body.appendChild( this.tmpPdfContainer );
  }


  @Effect()
  loadData$: Observable<Action> = this.actions$.pipe(
    ofType<LoadData>( DashActionTypes.LoadData ),
    switchMap(() => {
      return this.dataService
        .loadCSV$( filename, cast )
        .pipe( map( data => new LoadDataSuccess( data )));
    })
  );

  @Effect()
  runDataPrep$: Observable<Action> = this.actions$.pipe(
    ofType<LoadDataSuccess>( DashActionTypes.LoadDataSuccess ),
    map( action => dataPrep( action.payload )),
    map( data => new RunDataPrepComplete( data ))
  );

  @Effect({ dispatch: false })
  launchPVLive$: Observable<Action> = this.actions$.pipe(
    ofType<LaunchPVLive>( DashActionTypes.LaunchPVLive ),
    tap(() => this.router.navigate(
      [ '/externalPVRedirect', { externalUrl: 'https://projet-voltaire.fr' } ],
      { skipLocationChange: true }
  )));

  @Effect({ dispatch: false })
  startPrintReport$: Observable<Action> = this.actions$.pipe(
    ofType<StartPrintReport>( DashActionTypes.StartPrintReport ),
    map(( action ) => {
      this.tmpPdfContainer.innerHTML = '';
      return null;
    })
  );

  @Effect({ dispatch: false })
  checkWidget$: Observable<Action> = this.actions$.pipe(
    ofType<CheckWidget>( DashActionTypes.CheckWidget ),
    withLatestFrom(
      this.store.pipe( select( fromStore.selectedWidgets )),
      ( action, selectedWidgets ) => {

        const sw = filter( selectedWidgets, w => startsWith( w, 'table-row' ));
        let widgetEl, tmpWrapper, widgetCloneEl, cloneEl;
        // tslint:disable-next-line:prefer-const
        let { isChecked, widgetId } = action.payload;
        if ( isChecked ) {

          tmpWrapper = document.createElement( 'div' );
          tmpWrapper.setAttribute( 'style', `
            margin: 6px;
          ` );
          tmpWrapper.setAttribute( 'id', `print-${
            startsWith( widgetId, 'table-row' ) ? 'table-view' : widgetId }` );

          // we can only print either the whole table OR rows
          // In case of Rows we copy the table only once,
          // and we add selected rows
          if ( startsWith( widgetId, 'table-row' )) {
            let tableViewEl, cloneTableEl, tableHeaderEl;
            // first row, we clone all the table
            // and remove, everything to keep only
            // the header and the selected row.
            if ( size( sw ) <= 1 ) {
              tableViewEl = document.getElementById( 'table-view' );

              cloneEl = tableViewEl.cloneNode( true );
              copyComputedStyle( tableViewEl, cloneEl );

              tableHeaderEl = cloneEl.querySelector( '#cdk-header-row' );
              cloneTableEl = cloneEl.querySelector( '#cdk-table' );

              // remove all rows to keep only the header
              while ( cloneTableEl.firstChild ) {
                cloneTableEl.removeChild( cloneTableEl.firstChild );
              }

              widgetEl = document.getElementById( widgetId );
              widgetCloneEl = widgetEl.cloneNode( true );
              copyComputedStyle( widgetEl, widgetCloneEl );

              cloneTableEl.appendChild( tableHeaderEl );
              cloneTableEl.appendChild( widgetCloneEl );

            } else {
              // add row to the existing table and return
              widgetEl = document.getElementById( widgetId );
              widgetCloneEl = widgetEl.cloneNode( true );
              copyComputedStyle( widgetEl, widgetCloneEl );

              document
                .querySelector( '#print-table-view #cdk-table' )
                .appendChild( widgetCloneEl );

              return;
            }

          } else {
            widgetEl = document.getElementById( widgetId );
            cloneEl = widgetEl.cloneNode( true );
            copyComputedStyle( widgetEl, cloneEl );
          }

          tmpWrapper.appendChild( cloneEl );

          this.tmpPdfContainer.appendChild( tmpWrapper );

          if ( widgetId === 'connections' ) {
            // needed to rescale the svg which use viewBox
            const svg = document.querySelector( '#pdf-container #svg-connections' );
            // svg.setAttribute( 'viewBox', '0 0 2000 200'  );
            svg.setAttribute( 'width', `${ a4WidgetsStyles[ 'svg-connections' ].width }` );
            svg.setAttribute( 'height', `${ a4WidgetsStyles[ 'svg-connections' ].height }` );
          }

        } else {
          // remove widget
          let w, t;
          if ( startsWith( widgetId, 'table-row' )) {

            // there is at least one + +1, as sw is the state of
            // the selectedWidgets after the check/uncheck action row in the table
            if ( size( sw ) > 0 ) {
              t = this.tmpPdfContainer.querySelector( '#cdk-table' );
              w = t.querySelector( `#${widgetId}` );
              t.removeChild( w );

              return;
            } else {
              w = document.getElementById( 'print-table-view' );
            }

          } else {
            w = document.getElementById( `print-${widgetId}` );
          }

          this.tmpPdfContainer.removeChild( w );
        }
        return null;
      }
    )

  );

  @Effect()
  printReport$: Observable<Action> = this.actions$.pipe(
    ofType<PrintReport>( DashActionTypes.PrintReport ),
    map(() => {
      this.tmpPdfContainer.setAttribute( 'style', `display: flex;` );
      return null;
    }),
    delay( 200 ),
    switchMap(() => {
      const promise = html2pdf()
        .from( this.tmpPdfContainer )
        .set({
          filename: 'rapport-' + +new Date() + '.pdf',
          pagebreak: { mode: [ 'avoid-all' ] },
          jsPDF:  {  format: 'letter' },
        });

      return from(
        promise.toPdf().output( 'blob' ) // .save()
      )
      .pipe(
        map( blob => {
           // TODO to check if we want to open
           // files or not
            // const newWin = window.open( URL.createObjectURL( blob ), '_blank' );
            // if ( !newWin || newWin.closed || typeof newWin.closed === 'undefined' ) {
            //   // POPUP BLOCKED
            //   console.log( 'POPUP BLOCKED' );
            // }

            saveAs( blob, 'rapport-' + +new Date() + '.pdf' );

            return blob;
        }),
        map( blob => new PrintReportSuccess({ blob })),
        catchError( err => {
          return of( new PrintReportFailure( 'Print_Pdf_Report_Failure' ));
        })
      );

    })
  );

  @Effect()
  hotPrintWidget$: Observable<Action> = this.actions$.pipe(
    ofType<HotPrintWidget>( DashActionTypes.HotPrintWidget ),
    map( action => {
      const widgetId = action.payload;
      const widgetEl = document.getElementById( widgetId );
      const cloneEl = widgetEl.cloneNode( true );

      copyComputedStyle( widgetEl, cloneEl );

      const tmpWrapper = document.createElement( 'div' );
      tmpWrapper.setAttribute( 'style', `margin: 6px;` );
      tmpWrapper.setAttribute( 'id', `print-${widgetId}` );
      tmpWrapper.appendChild( cloneEl );
      this.tmpPdfContainer.appendChild( tmpWrapper );


      const svg = document.querySelector( '#pdf-container #svg-mline-chart' );
      // svg.setAttribute( 'viewBox', '0 0 2000 200'  );
      svg.setAttribute( 'width', `${ a4WidgetsStyles[ 'svg-mline-chart' ].width }` );
      svg.setAttribute( 'height', `${ a4WidgetsStyles[ 'svg-mline-chart' ].height }` );
      return;
    }),
    map(() => {
      this.tmpPdfContainer.setAttribute( 'style', `display: flex;` );
      return null;
    }),
    delay( 200 ),
    switchMap(() => {
      const promise = html2pdf()
        .from( this.tmpPdfContainer )
        .set({
          filename: 'rapport-' + +new Date() + '.pdf',
          pagebreak: { mode: [ 'avoid-all' ] },
          jsPDF:  {  format: 'letter' },
        });

      return from(
        promise.toPdf().output( 'blob' ) // .save()
      )
      .pipe(
        map( blob => {
           // TODO to check if we want to open
           // files or not
            // const newWin = window.open( URL.createObjectURL( blob ), '_blank' );
            // if ( !newWin || newWin.closed || typeof newWin.closed === 'undefined' ) {
            //   // POPUP BLOCKED
            //   console.log( 'POPUP BLOCKED' );
            // }

            saveAs( blob, 'rapport-' + +new Date() + '.pdf' );

            return blob;
        }),
        map( blob => new PrintReportSuccess({ blob })),
        catchError( err => {
          return of( new PrintReportFailure( 'Print_Pdf_Report_Failure' ));
        })
      );

    })
  );

  @Effect({ dispatch: false })
  PrintReportSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<PrintReportSuccess>( DashActionTypes.PrintReportSuccess ),
    tap(() => {
      this.tmpPdfContainer.setAttribute( 'style', `display: none;` );
      this.tmpPdfContainer.innerHTML = '';
    })
  );

  @Effect({ dispatch: false })
  PrintReportFailure$: Observable<Action> = this.actions$.pipe(
    ofType<PrintReportFailure>( DashActionTypes.PrintReportFailure ),
    tap(() => {
      this.tmpPdfContainer.setAttribute( 'style', `display: none;` );
      this.tmpPdfContainer.innerHTML = '';
    })
  );

}

