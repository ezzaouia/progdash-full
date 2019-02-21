import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { each, get, set, last, split, keys } from 'lodash';

import { UserData } from '../../store';
import {
  GridsterConfig,
  CompactType,
  DisplayGrid,
  GridType
} from 'angular-gridster2';
import { InfoWidgetComponent } from '../infoWidget';
import { UserTimelineWidgetComponent } from '../userTimelineWidget';
import { TopNRulesWidgetComponent } from '../topNRulesWidget';

/* tslint:disable component-selector  */
@Component({
  selector: 'UserDetail',
  template: `
  <div
    #containerRef
    id="learner-report"
    class="container">
    <div class="header">
      <h3>{{ user.fullName }}</h3>

      <span class="fill"></span>

      <button
        class="fab-button mat-32"
        mat-button
        (click)="hotPrintWidgetHandler.emit( 'learner-report' )">
          <mat-icon>print</mat-icon>
      </button>

      <button
        class="fab-button mat-32"
        mat-stroked-button
        (click)="onCloseClick()">
          <mat-icon aria-label="menu">close</mat-icon>
      </button>
    </div>

    <div class="grid"
      data-simplebar
      data-simplebar-auto-hide="false">
        <mat-grid-list cols="12" rowHeight="60px" gutterSize="10px">
        <mat-grid-tile
          mat-elevation-z1
          *ngFor="let key of boardGridElements"
          [colspan]="boardGrid[key].grid.cols"
          [rowspan]="boardGrid[key].grid.rows"
          (mouseenter)="hoverWidgetTraceHandler.emit({
            event: 'mouseenter', id: 'learner-' + key
          })"
          (mouseleave)="hoverWidgetTraceHandler.emit({
              event: 'mouseleave', id: 'learner-' + key
          })">

            <ndc-dynamic
              [ndcDynamicComponent]="boardGrid[key].component"
              [ndcDynamicInputs]="boardGrid[key].data">
            </ndc-dynamic>

        </mat-grid-tile>
      </mat-grid-list>
    </div>

  </div>
  `,
  styles: [
    `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
      #learner-report {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      .header {
        display: flex;
        width: 100%;
        height: 46px;
        z-index: 1001;
      }
      .grid {
        box-sizing: border-box;
        width: 100%; /*calc(100vw - 300px);*/
        height: calc(100% - 46px);
      }
      mat-grid-list {
        margin: 20px;
      }
      mat-grid-tile {
        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
      }
    `,
  ],
})
export class UserDetailComponent implements OnInit, AfterViewInit {
  @ViewChild( 'containerRef' ) elRef: ElementRef;

  @Input() user;
  @Input() modulesData;

  @Output() hoverWidgetTraceHandler = new EventEmitter();
  @Output() hotPrintWidgetHandler = new EventEmitter();

  offsetWidth;
  marginOffset = 125;
  boardOptions: GridsterConfig;
  boardGrid: any; // Array<GridsterItem>;
  boardGridElements: string[]; // Array<GridsterItem>;

  static itemChange ( item, itemComponent ) {
    // console.log( 'itemChanged', item, itemComponent );
  }

  static itemResize ( item, itemComponent ) {
    // console.log( 'itemResized', item, itemComponent );
  }

  constructor ( public dialogRef: MatDialogRef<UserDetailComponent> ) {}

  ngOnInit (): void {
    this.boardOptions = {};
    this.boardGrid = {};
  }

  ngAfterViewInit (): void {
    this.offsetWidth = this.elRef.nativeElement.offsetWidth - this.marginOffset;
    this.boardOptions = {
      itemChangeCallback: UserDetailComponent.itemChange,
      itemResizeCallback: UserDetailComponent.itemResize,
      compactType: CompactType.CompactLeft,
      swap: true,
      gridType: GridType.Fixed,
      displayGrid: DisplayGrid.OnDragAndResize,
      pushItems: true,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      fixedColWidth: Math.floor( this.offsetWidth / 12 ),
      fixedRowHeight: 60,
      margin: 10,
    };

    this.boardGrid = {
      score: {
        grid: { cols: 4, rows: 2, y: 0, x: 0 },
        component: InfoWidgetComponent,
        data: {
          title: 'Règles acquises',
          infoLabel: '',
        },
      },
      time: {
        grid: { cols: 4, rows: 2, y: 0, x: 4 },
        component: InfoWidgetComponent,
        data: {
          title: 'Temps d’entrainement',
          infoLabel: '',
        },
      },
      initialLevel: {
        grid: { cols: 4, rows: 2, y: 0, x: 8 },
        component: InfoWidgetComponent,
        data: {
          title: 'Règles sues initialement',
          infoLabel: '',
        },
      },
      progData: {
        grid: { cols: 3 * 4, rows: 5, y: 2, x: 0 },
        component: UserTimelineWidgetComponent,
        data: {
          title: 'Progression dans le temps',
        },
      },
      'topNRules.focused': {
        grid: { cols: 4, rows: 6, y: 7, x: 0 },
        component: TopNRulesWidgetComponent,
        data: {
          title: 'Règles en cours d’apprentissage',
        },
      },
      'topNRules.acquired': {
        grid: { cols: 4, rows: 6, y: 7, x: 4 },
        component: TopNRulesWidgetComponent,
        data: {
          title: 'Règles Acquises',
        },
      },
      'topNRules.known': {
        grid: { cols: 4, rows: 6, y: 7, x: 8 },
        component: TopNRulesWidgetComponent,
        data: {
          title: 'Règles sues initialement',
        },
      },
    };

    each( this.boardGrid, ( value, key ) => {
      set( value, 'data', {
        ...value.data,
        ...get( this.user, key ),
        key: last( split( key, '.' )),
        offsetWidth: this.offsetWidth,
        userData: this.user,
        modulesData: this.modulesData,
        isPVLive: false,
      });
    });

    this.boardGridElements = keys( this.boardGrid );
  }

  onCloseClick (): void {
    this.dialogRef.close();
  }

  changedOptions () {
    this.boardOptions.api.optionsChanged();
  }

  removeItem ( item ) {
    this.boardGrid.splice( this.boardGrid.indexOf( item ), 1 );
  }

  addItem () {
    //  this.boardGrid.push({});
  }
}
