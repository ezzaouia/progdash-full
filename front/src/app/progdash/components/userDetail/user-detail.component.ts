import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { each, get, set, last, split } from 'lodash';

import { UserData } from '../../store';
import { GridsterConfig, CompactType, DisplayGrid, GridType } from 'angular-gridster2';
import { InfoWidgetComponent } from '../infoWidget';
import { UserTimelineWidgetComponent } from '../userTimelineWidget';
import { TopNRulesWidgetComponent } from '../topNRulesWidget';

/* tslint:disable component-selector  */
@Component({
  selector: 'UserDetail',
  template: `
  <div
    #containerRef
    class="container">
    <div class="header">
      <h3>{{ user.fullName }}</h3>

      <span class="fill"></span>

      <button
        class="more-btn mat-elevation-z0"
        mat-mini-fab
        (click)="onCloseClick()">
          <mat-icon aria-label="menu">close</mat-icon>
      </button>
    </div>
  </div>
    <gridster
      #gridster
      [options]="boardOptions">
        <gridster-item
          class="grid-item mat-elevation-z1"
          [item]="item.value.grid"
          *ngFor="let item of boardGrid | keyvalue">
          <ndc-dynamic
            [ndcDynamicComponent]="item.value.component"
            [ndcDynamicInputs]="item.value.data">
          </ndc-dynamic>
        </gridster-item>
    </gridster>
  `,
  styles: [ `
    :host {
      display: block;
      height: 100vh;
      width: 100%;
    }
    gridster {
      background: #eee;
    }
    .grid-item {
      padding: 0 12px;
    }
    .header {
      display: flex;
      width: 100%;
      height: 46px;
      z-index: 1001;
    }
  ` ],
})
export class UserDetailComponent implements OnInit, AfterViewInit {
  @ViewChild( 'containerRef' ) elRef: ElementRef;

  @Input() user;

  offsetWidth;
  marginOffset = 125;
  boardOptions: GridsterConfig;
  boardGrid: any; // Array<GridsterItem>;

  static itemChange ( item, itemComponent ) {
    // console.log( 'itemChanged', item, itemComponent );
  }

  static itemResize ( item, itemComponent ) {
    // console.log( 'itemResized', item, itemComponent );
  }

  constructor ( public dialogRef: MatDialogRef<UserDetailComponent> ) { }


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
      fixedRowHeight: 50,
      margin: 10,
    };

    this.boardGrid = {
      score: {
        grid: { cols: 6, rows: 3, y: 0, x: 0 },
        component: InfoWidgetComponent,
        data: {
          title: 'Avancement Règles',
          infoLabel: '',
        },
      },
      time: {
        grid: { cols: 6, rows: 3, y: 0, x: 3 },
        component: InfoWidgetComponent,
        data: {
          title: 'Avancement Temps',
          infoLabel: '',
        },
      },
      progData: {
        grid: { cols: 3 * 4, rows: 8, y: 3, x: 0 },
        component: UserTimelineWidgetComponent,
        data: {
          title: 'Ligne de Temps de la Progression',
        },
      },
      'topNRules.focused': {
        grid: { cols: 4, rows: 6, y: 11, x: 0 },
        component: TopNRulesWidgetComponent,
        data: {
          title: 'Règles en Focus',
        },
      },
      'topNRules.acquired': {
        grid: { cols: 4, rows: 6, y: 11, x: 4 },
        component: TopNRulesWidgetComponent,
        data: {
          title: 'Règles Acquises',
        },
      },
      'topNRules.known': {
        grid: { cols: 4, rows: 6, y: 11, x: 8 },
        component: TopNRulesWidgetComponent,
        data: {
          title: 'Règles Sues',
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
        isPVLive: false,
      });
    });
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
