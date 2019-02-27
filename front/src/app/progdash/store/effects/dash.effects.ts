import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { get } from 'lodash';
import {
  switchMap,
  map,
  tap,
  catchError,
  withLatestFrom,
  delay,
} from 'rxjs/operators';
import { select, Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { startsWith, filter, size } from 'lodash';
import { saveAs } from 'file-saver';
import * as moment from 'moment';
moment.locale( 'fr' );

import { ProgdashDataService } from '../../services';
import { TeacherService } from '../../services';
import {
  LoadData,
  DashActionTypes,
  LaunchPVLive,
  CheckWidget,
  PrintReport,
  PrintReportFailure,
  PrintReportSuccess,
  StartPrintReport,
  HotPrintWidget,
  LoadGroupsData,
  LoadGroupsDataSuccess,
  LoadGroupsDataFailure,
  SelectClass,
  LoadGroupData,
  LoadGroupDataSuccess,
  LoadGroupDataFailure,
  Empty,
} from '../actions';
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';

import * as fromStore from '..';
import { a4WidgetsStyles, copyComputedStyle } from '../../utils/html2pdf.utils';

@Injectable()
export class DashEffects {
  tmpPdfContainer: Element = null;
  tmpPdfReport: Element = null;
  tmpPdfHeader: Element = null;

  constructor (
    private actions$: Actions,
    private teacherService: TeacherService,
    private progdashDataService: ProgdashDataService,
    private router: Router,
    private store: Store<fromStore.State>
  ) {
    this.tmpPdfReport = document.createElement( 'div' );
    this.tmpPdfContainer = document.createElement( 'div' );
    this.tmpPdfHeader = document.createElement( 'div' );

    this.tmpPdfReport.setAttribute( 'id', 'pdf-report' );
    this.tmpPdfContainer.setAttribute( 'id', 'pdf-container' );

    this.tmpPdfReport.setAttribute( 'style', `display: none;` );

    this.tmpPdfReport.appendChild( this.tmpPdfHeader );
    this.tmpPdfReport.appendChild( this.tmpPdfContainer );
    document.body.appendChild( this.tmpPdfReport );
  }

  @Effect()
  loadGroupsData$: Observable<Action> = this.actions$.pipe(
    ofType<LoadGroupsData>( DashActionTypes.LoadGroupsData ),
    withLatestFrom( this.store.pipe( select( fromStore.userInfo ))),
    switchMap(([ _, userInfo ]) => {
      return this.progdashDataService
        .loadGroupsData$({ areaId: userInfo.areaId })
        .pipe(
          map( payload => new LoadGroupsDataSuccess( payload )),
          catchError( err => {
            return of( new LoadGroupDataFailure( err ));
          })
        );
    })
  );

  @Effect()
  selectClass$: Observable<Action> = this.actions$.pipe(
    ofType<SelectClass>( DashActionTypes.SelectClass ),
    map( action => action.payload ),
    withLatestFrom( this.store.pipe( select( fromStore.userInfo ))),
    withLatestFrom( this.store.pipe( select( fromStore.classes ))),
    map(([ [ selectedClass, userInfo ], classes ]) => ({ selectedClass, userInfo, classes })),
    switchMap(({ selectedClass, userInfo, classes }) => {
      const pulledAt = get( classes, `byId.${selectedClass.id}.pulledAt`, '' );
      if ( pulledAt &&  ( moment().diff( moment( pulledAt ), 'hours', true ) < 1 )) {
        // workaround TOFIX, the action exist but I'm not able to return new Empty()
        return of({ type: '[Dash] Empty' });
      } else {
        return this.progdashDataService
        .loadGroupData$({
          groupId: selectedClass.id === 0 ? '' : selectedClass.id,
          areaId: userInfo.areaId,
        })
        .pipe(
          map( payload => {
            return new LoadGroupDataSuccess({ group: selectedClass, data: payload });
          }),
          catchError( err => {
            return of( new LoadGroupDataFailure( err ));
          })
        );
      }
    })
  );

  // @Effect()
  // runDataPrep$: Observable<Action> = this.actions$.pipe(
  //   ofType<LoadDataSuccess>( DashActionTypes.LoadDataSuccess ),
  //   map( action => dataPrep( action.payload )),
  //   map( data => new RunDataPrepComplete( data ))
  // );

    @Effect({ dispatch: false })
    launchPVLive$: Observable<String> = this.actions$.pipe(
        ofType<LaunchPVLive>( DashActionTypes.LaunchPVLive ),
        switchMap(( action: LaunchPVLive ) => {
            return this.teacherService.getLink( action.payload.lessons );
        }),
        tap(( url: String ) => this.router.navigate(
            [ '/externalPVRedirect', { externalUrl: url } ],
            { skipLocationChange: true }
        )));

  @Effect({ dispatch: false })
  startPrintReport$: Observable<Action> = this.actions$.pipe(
    ofType<StartPrintReport>( DashActionTypes.StartPrintReport ),
    withLatestFrom( this.store.pipe( select( fromStore.selectedClass ))),
    map(([ _ , selectedClass ]) => {
      this.tmpPdfHeader.innerHTML = `
        <header>
          <span class="title">Suivi Voltaire</span>
          <span class="separator"></span>
          <span>${get( selectedClass, 'name', 'N/A' )}</span>
          <span class="fill"></span>
          <span>${ moment().format( 'LLLL' )}</span>
        </header>
      `;
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
          tmpWrapper.setAttribute(
            'style',
            `
            margin: 6px;
          `
          );
          tmpWrapper.setAttribute(
            'id',
            `print-${
              startsWith( widgetId, 'table-row' ) ? 'table-view' : widgetId
            }`
          );

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
            const svg = document.querySelector(
              '#pdf-container #svg-connections'
            );
            // svg.setAttribute( 'viewBox', '0 0 2000 200'  );
            svg.setAttribute(
              'width',
              `${a4WidgetsStyles['svg-connections'].width}`
            );
            svg.setAttribute(
              'height',
              `${a4WidgetsStyles['svg-connections'].height}`
            );
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
      this.tmpPdfReport.setAttribute( 'style', `display: flex;` );
      return null;
    }),
    delay( 1000 ),
    switchMap(() => {
      const promise = html2pdf()
        .from( this.tmpPdfReport )
        .set({
          filename: 'rapport-' + +new Date() + '.pdf',
          pagebreak: { mode: [ 'avoid-all' ] },
          jsPDF: { format: 'letter' },
        });

      return from(
        promise.toPdf().output( 'blob' ) // .save()
      ).pipe(
        map( blob => {
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
    withLatestFrom( this.store.pipe( select( fromStore.selectedClass ))),
    map(([ action , selectedClass ]) => {
      const widgetId = action.payload;
      const widgetEl = document.getElementById( widgetId );
      const cloneEl = widgetEl.cloneNode( true );

      copyComputedStyle( widgetEl, cloneEl );

      const tmpWrapper = document.createElement( 'div' );
      tmpWrapper.setAttribute( 'style', `margin: 6px;` );
      tmpWrapper.setAttribute( 'id', `print-${widgetId}` );
      tmpWrapper.appendChild( cloneEl );

      this.tmpPdfHeader.innerHTML = '';
      const hack = document.createElement( 'div' );
      hack.innerHTML = `
        <header>
          <span class="title">Suivi Voltaire</span>
          <span class="separator"></span>
          <span>${get( selectedClass, 'name', 'N/A' )}</span>
          <span class="fill"></span>
          <span>${ moment().format( 'LLLL' )}</span>
        </header>
      `;

      this.tmpPdfContainer.appendChild( hack );
      this.tmpPdfContainer.appendChild( tmpWrapper );

      const svg = document.querySelector( '#pdf-container #svg-mline-chart' );
      // svg.setAttribute( 'viewBox', '0 0 2000 200'  );
      svg.setAttribute( 'width', `${a4WidgetsStyles['svg-mline-chart'].width}` );
      svg.setAttribute(
        'height',
        `${a4WidgetsStyles['svg-mline-chart'].height}`
      );

      return;
    }),
    map(() => {
      this.tmpPdfReport.setAttribute( 'style', `display: flex;` );
      return null;
    }),
    delay( 1000 ),
    switchMap(() => {
      const promise = html2pdf()
        .from( this.tmpPdfReport )
        .set({
          filename: 'rapport-' + +new Date() + '.pdf',
          pagebreak: { mode: [ 'avoid-all' ] },
          jsPDF: { format: 'letter' },
        });

      return from(
        promise.toPdf().output( 'blob' ) // .save()
      ).pipe(
        map( blob => {
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
      this.tmpPdfReport.setAttribute( 'style', `display: none;` );
      this.tmpPdfContainer.innerHTML = '';
      this.tmpPdfHeader.innerHTML = '';
    })
  );

  @Effect({ dispatch: false })
  PrintReportFailure$: Observable<Action> = this.actions$.pipe(
    ofType<PrintReportFailure>( DashActionTypes.PrintReportFailure ),
    tap(() => {
      this.tmpPdfReport.setAttribute( 'style', `display: none;` );
      this.tmpPdfContainer.innerHTML = '';
      this.tmpPdfHeader.innerHTML = '';
    })
  );
}
