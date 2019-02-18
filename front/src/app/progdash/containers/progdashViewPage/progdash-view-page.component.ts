import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';
import { UserData, ClassData, StoreField, InsightData } from '../../store/types';
import { Timescale } from '../../utils/utils';

/* tslint:disable component-selector  */
@Component({
  selector: 'ProgdashViewPage',
  template: `
    <span *ngIf="!(isDataLoaded$ | async)">
      Chargement...
    </span>
    <ProgdashManager
      *ngIf="isDataLoaded$ | async"
      [isDataLoaded]="isDataLoaded$ | async"
      [isProgTableOpened]="isProgTableOpened$ | async"
      [isStartPrintReport]="isStartPrintReport$ | async"

      [classes]="classes$ | async"
      [usersByClass]="usersByClass$ | async"
      [insights]="insights$ | async"
      [modulesData]="modulesData$ | async"

      [selectedClass]="selectedClass$ | async"
      [selectedTimescale]="selectedTimescale$ | async"
      [selectedRules]="selectedRules$ | async"
      [selectedWidgets]="selectedWidgets$ | async"

      (selectClassHandler)="onSelectClass($event)"
      (timescaleHandler)="onTimescaleChange($event)"
      (openProgTableHandler)="onOpenProgTable($event)"
      (closeProgTableHandler)="onCloseProgTable($event)"

      (checkRuleHandler)="onCheckRule($event)"
      (launchPVLiveHandler)="onLaunchPVLive($event)"
      (cancelPVLiveHandler)="onCancelPVLive($event)"

      (startPrintReportHandler)="onStartPrintReportHandler($event)"
      (closePrintReportHandler)="onClosePrintReportHandler($event)"
      (checkWidgetHandler)="onCheckWidgetHandler($event)"
      (printReportHandler)="onPrintReportHandler($event)"
      (hotPrintWidgetHandler)="onHotPrintWidgetHandler($event)"

      (sortColumnTraceHandler)="onSortColumnTraceHandler($event)"
      (filterColumnTraceHandler)="onFilterColumnTraceHandler($event)"
      (openUserDialogTraceHandler)="onOpenUserDialogTraceHandler($event)"
      (hoverWidgetTraceHandler)="onHoverWidgetTraceHandler($event)">
    </ProgdashManager>
  `,
})
export class ProgdashViewPageComponent implements OnInit {

  isDataLoaded$: Observable<boolean>;
  isStartPrintReport$: Observable<boolean>;
  isProgTableOpened$: Observable<boolean>;
  classes$: Observable<StoreField<ClassData>>;
  usersByClass$: Observable<StoreField<UserData>>;
  insights$: Observable<StoreField<InsightData>>;
  modulesData$: Observable<{}>;
  selectedClass$: Observable<string>;
  selectedTimescale$: Observable<string> = from( 'lastWeek' );
  selectedRules$: Observable<string[]>;
  selectedWidgets$: Observable<string[]>;

  constructor ( private store: Store<fromStore.State> ) {
    this.isDataLoaded$ = this.store.pipe( select( fromStore.isDataLoaded ));
    this.isProgTableOpened$ = this.store.pipe( select( fromStore.isProgTableOpened ));
    this.isStartPrintReport$ = this.store.pipe( select( fromStore.isStartPrintReport ));

    this.classes$ = this.store.pipe( select ( fromStore.classes ));
    this.usersByClass$ = this.store.pipe( select( fromStore.usersByClass ));
    this.insights$ = this.store.pipe( select ( fromStore.insights ));

    this.selectedClass$ = this.store.pipe( select ( fromStore.selectedClass ));
    this.selectedTimescale$ = this.store.pipe( select ( fromStore.selectedTimescale ));
    this.selectedRules$ = this.store.pipe( select ( fromStore.selectedRules ));
    this.selectedWidgets$ = this.store.pipe( select ( fromStore.selectedWidgets ));
    this.modulesData$ = this.store.pipe( select ( fromStore.modulesData ));
  }

  ngOnInit (): void {
    this.store.dispatch( new fromStore.LoadData());
  }

  onTimescaleChange ( timescale: string ) {
    this.store.dispatch( new fromStore.SelectTimescale( timescale ));
  }

  onSelectClass ( className: string ) {
    this.store.dispatch( new fromStore.SelectClass( className ));
  }

  onOpenProgTable () {
    this.store.dispatch( new fromStore.OpenProgTable( ));
  }

  onCloseProgTable () {
    this.store.dispatch( new fromStore.CloseProgTable( ));
  }

  onCheckRule ({ isChecked, ruleId }) {
    this.store.dispatch( new fromStore.CheckRule({ isChecked, ruleId }));
  }

  onLaunchPVLive () {
    this.store.dispatch( new fromStore.LaunchPVLive( ));
  }

  onCancelPVLive () {
    this.store.dispatch( new fromStore.CancelPVLive( ));
  }

  onStartPrintReportHandler () {
    this.store.dispatch( new fromStore.StartPrintReport( ));
  }

  onClosePrintReportHandler () {
    this.store.dispatch( new fromStore.ClosePrintReport( ));
  }

  onCheckWidgetHandler ({ isChecked, widgetId }) {
    this.store.dispatch( new fromStore.CheckWidget({ isChecked, widgetId }));
  }

  onPrintReportHandler ( selectedWidgets ) {
    this.store.dispatch( new fromStore.PrintReport( selectedWidgets ));
  }

  onSortColumnTraceHandler ( payload ) {
    this.store.dispatch( new fromStore.SortColumn( payload ));
  }

  onFilterColumnTraceHandler ( payload ) {
    this.store.dispatch( new fromStore.FilterColumn( payload ));
  }

  onOpenUserDialogTraceHandler ( payload ) {
    this.store.dispatch( new fromStore.OpenUserDialog( payload ));
  }

  onHoverWidgetTraceHandler ( payload ) {
    this.store.dispatch( new fromStore.HoverWidget( payload ));
  }

  onHotPrintWidgetHandler ( payload ) {
    this.store.dispatch( new fromStore.HotPrintWidget( payload ));
  }

}
