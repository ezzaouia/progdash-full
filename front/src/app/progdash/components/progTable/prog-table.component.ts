import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { values } from 'lodash';
import { initialEvalCatColors, moduleCatColors } from '../../../utils/chart.util';
import { PrintWidgetComponent } from '../../../shared/components';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ProgTable',
  template: `
  <div class="container">

    <mat-card
      id="table-view"
      class="widget-card table-widget"
      data-simplebar
      data-simplebar-auto-hide="false"
      (mouseenter)="hoverWidgetTraceHandler.emit({event: 'mouseenter',id: 'table-view'})"
      (mouseleave)="hoverWidgetTraceHandler.emit({event: 'mouseleave',id: 'table-view'})">
      <mat-card-header>
        <PrintWidget
          *ngIf="isStartPrintReport"
          [widgetId]="'table-view'"
          [checked]="selectedWidgets.includes('table-view')"
          (checkWidgetHandler)="checkWidgetHandler.emit($event)">
        </PrintWidget>
      </mat-card-header>
      <mat-card-content>
        <TableViewManager
          class="table-widget"
          [tableMode]="'normal'"
          [data]="userListData | values"
          [columns]="columns"
          [options]="{ filter: true, header: true }"
          [colDefaultWidth]="colDefaultWidth"
          [colDefaultHeight]="colDefaultHeight"
          [isStartPrintReport]="isStartPrintReport"
          [selectedWidgets]="selectedWidgets"
          (checkWidgetHandler)="checkWidgetHandler.emit($event)"
          (sortColumnTraceHandler)="sortColumnTraceHandler.emit($event)"
          (filterColumnTraceHandler)="filterColumnTraceHandler.emit($event)"
          (userMoreMenuHandler)="userMoreMenuHandler.emit($event)">
        </TableViewManager>
      </mat-card-content>
    </mat-card>

    <mat-card
      id="line-chart"
      class="widget-card line-widget"
      (mouseenter)="hoverWidgetTraceHandler.emit({event: 'mouseenter',id: 'line-chart'})"
      (mouseleave)="hoverWidgetTraceHandler.emit({event: 'mouseleave',id: 'table-view'})">
      <mat-card-header>
        <mat-card-title>Progression dans le temps</mat-card-title>
      </mat-card-header>
      <mat-card-content #lineWidget>
        <MlineChart
          *ngIf="lineWidget.offsetWidth && lineWidget.offsetHeight"
          [data]="userListData | values"
          [modulesData]="modulesData"
          [width]="lineWidget.offsetWidth"
          [height]="lineWidget.offsetHeight"
          [timeScale]="'day'"
          [ykey]="'sumscore'">
        </MlineChart>
      </mat-card-content>
    </mat-card>

  </div>
  `,
  styles: [ `
    :host {
      display: flex;
      align-items: flex-start;
      width: 100vw;
      height: 100%;
    }
    .container {
      display: flex;
      margin-left: auto;
      margin-right: auto;
      padding: 3px;
      box-sizing: border-box;
    }
    .widget-card {
      padding: 0px;
      margin: 3px;
      box-sizing: border-box;
    }
    mat-card-content {
      padding: 12px 0px;
      width: calc(100% - 12px);
      height: 90%;
    }
    mat-card-header {
      padding: 0px 12px;
      box-sizing: border-box;
    }
    .widget-content {
      width: 100%;
      height: 100%;
    }
    .table-widget {
      width: 70vw;
      height: calc(100vh - 58px);
    }
    .line-widget {
      width: 30vw;
      height: calc(100vh - 58px);
      padding: 12px 0px;
      box-sizing: border-box;
    }
  ` ],
})
export class ProgTableComponent implements OnInit, OnDestroy {

  @Input() isStartPrintReport;
  @Input() progTableMode;
  @Input() selectedWidgets: string[];
  @Input() modulesData: {}[];

  @Output() checkWidgetHandler = new EventEmitter();
  @Output() sortColumnTraceHandler = new EventEmitter();
  @Output() filterColumnTraceHandler = new EventEmitter();
  @Output() hoverWidgetTraceHandler = new EventEmitter();
  @Output() userMoreMenuHandler = new EventEmitter();

  updateSub: Subscription;
  userListData$ = new BehaviorSubject<any>({});
  dataStream = new BehaviorSubject<any[]>([]);

  colDefaultWidth = 100;
  colDefaultHeight = 30;
  columns = {
    moremenu: {
      name: '',
      histo: '',
      encoding: 'NG',
      width: 24,
      topBottom: 0,
    },
    fullName: {
      name: 'Apprenant',
      histo: '',
      encoding: 'STRING',
      width: 100,
      topBottom: 0,
    },
    moduleName: {
      name: 'Module Atteint',
      histo: 'categorical',
      encoding: 'CAT',
      width: 100,
      topBottom: 0,
      color: moduleCatColors,
    },
    'lastConnection': {
      name: 'Dernière Connexion',
      histo: 'categorical',
      encoding: 'CAT',
      width: 100,
      topBottom: 0,
    },
    'connectionsNbr': {
      name: 'Nbr. Connexions',
      histo: 'ordinal',
      encoding: 'BAR',
      width: 80,
      topBottom: 0,
    },
    'initialEval.sum': {
      name: 'Eval. Initiale',
      histo: 'ordinal',
      encoding: 'BAR',
      width: 80,
      topBottom: 0,
    },
    'initialLevel.sum': {
      name: 'Règles sues initialement',
      histo: 'ordinal',
      encoding: 'BAR',
      width: 80,
      topBottom: 0,
    },
    'time.sum': {
      name: 'Temps cumulé',
      hint: 'time.format',
      histo: 'ordinal',
      encoding: 'BAR',
      width: 80,
      topBottom: 0,
    },
    'score.sum': {
      name: 'Score',
      histo: 'ordinal',
      encoding: 'BAR',
      hint: 'score.format',
      width: 80,
      topBottom: 0,
    },
    'print': {
      name: '',
      histo: '',
      encoding: 'NG',
      width: 50,
      topBottom: 0,
    },
    // 'progData.day': {
    //   name: 'Progression',
    //   histo: '',
    //   encoding: 'LINE',
    //   width: 70,
    //   topBottom: 0,
    //   xkey: 'date',
    //   ykey: 'sumscore',
    //   scaleType: 'time',
    // },
  };

  constructor () {}

  ngOnInit (): void {
    this.updateSub = this.userListData$
      .subscribe( _ => {
        this.dataStream.next( values( this.userListData ));
      });
  }

  ngOnDestroy (): void {
    this.updateSub.unsubscribe();
  }

  @Input()
  set userListData ( value ) {
    this.userListData$.next( value );
  }

  get userListData () {
    return this.userListData$.getValue();
  }

}
