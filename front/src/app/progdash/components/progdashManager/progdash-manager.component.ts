import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterContentInit,
  ElementRef
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

import { UserDetailComponent } from '../../components';
import { Modal } from '../../../shared/components';
import { StoreField, ClassData } from '../../store';

/* tslint:disable component-selector  */
@Component({
  selector: 'ProgdashManager',
  template: `
    <ProgdashView [isSidenavOpened]="!isProgTableOpened">
      <app-navbar class="toolbar mat-elevation-z3">
        <div class="logo">
          <mat-icon aria-label="menu">graphic_eq</mat-icon>
          <span>Progdash</span>
        </div>

        <span class="fill"></span>

        <!-- from table -> back to dash -->
        <button
          *ngIf="isProgTableOpened"
          mat-stroked-button
          (click)="closeProgTableHandler.emit($event)">
            <mat-icon aria-label="menu">arrow_back</mat-icon>
            Tableau de bord
        </button>

        <TimescaleMenu
          *ngIf="!isProgTableOpened && selectedClass"
          [selectedTimescale]="selectedTimescale"
          (timescaleHandler)="timescaleHandler.emit($event)">
        </TimescaleMenu>

        <span class="fill"></span>

        <div class="class-picker">
          <button
            mat-button
            [matMenuTriggerFor]="className"
            yPosition="below">
            <span *ngIf="!selectedClass">
                Sélectionnez une classe
            </span>
            <span class="class-name">{{ selectedClass }}</span>
              <mat-icon>arrow_drop_down</mat-icon>
          </button>
        </div>

        <div class="print-container">
          <button
            class="raised-button"
            mat-raised-button
            *ngIf="isStartPrintReport"
            (click)="printReportHandler.emit( selectedWidgets )">
              Imprimer | {{ selectedWidgets.length | formatAttr:'widget' }}
          </button>
          <button
            class="fab-button mat-32"
            mat-button
            *ngIf="!isStartPrintReport"
            (click)="startPrintReportHandler.emit($event)">
              <mat-icon *ngIf="!isStartPrintReport">print</mat-icon>
          </button>
          <button
            mat-mini-fab
            *ngIf="isStartPrintReport"
            (click)="closePrintReportHandler.emit($event)">
              <mat-icon>print_disabled</mat-icon>
          </button>
        </div>

        <button
          class="fab-button mat-32"
          mat-stroked-button
          [matMenuTriggerFor]="more"
          yPosition="below">
            <mat-icon aria-label="menu">more_vert</mat-icon>
        </button>

      </app-navbar>

      <mat-menu #className="matMenu">
        <ClassNameMenu
          [classListData]="(classes ? classes.allIds : [])"
          (selectClassHandler)="selectClassHandler.emit($event)">
        </ClassNameMenu>
      </mat-menu>

      <mat-menu #more="matMenu">
        <MoreMenu></MoreMenu>
      </mat-menu>

      <div class="sidenav">
        <UserList
          [userListData]="(selectedClass ? usersByClass.byClassId[selectedClass] : [])"
          [timescale]="selectedTimescale"
          (userMoreMenuHandler)="onUserMoreMenuClick($event)">
        </UserList>
      </div>

      <div class="prog-table">
        <button
          class="prog-table-btn mat-elevation-z2"
          mat-button
          (click)="openProgTableHandler.emit($event)">
            Détail
          <mat-icon aria-label="menu">arrow_forward</mat-icon>
        </button>
      </div>

      <div #board class="board">

        <ProgBoard
          id="progboard"
          *ngIf="boardWidth && !isProgTableOpened"
          [boardWidth]="boardWidth"
          [classes]="classes"
          [isStartPrintReport]="isStartPrintReport"

          [selectedClass]="selectedClass"
          [selectedTimescale]="selectedTimescale"
          [selectedRules]="selectedRules"
          [selectedWidgets]="selectedWidgets"

          (checkRuleHandler)="checkRuleHandler.emit($event)"
          (launchPVLiveHandler)="launchPVLiveHandler.emit($event)"
          (cancelPVLiveHandler)="cancelPVLiveHandler.emit($event)"
          (checkWidgetHandler)="checkWidgetHandler.emit($event)"
          (hoverWidgetTraceHandler)="hoverWidgetTraceHandler.emit($event)">
        </ProgBoard>

        <ProgTable
          *ngIf="isProgTableOpened"
          [isStartPrintReport]="isStartPrintReport"
          [selectedWidgets]="selectedWidgets"
          [modulesData]="modulesData"
          [userListData]="(selectedClass ? usersByClass.byClassId[selectedClass] : [])"
          (checkWidgetHandler)="checkWidgetHandler.emit($event)"
          (closeProgTableHandler)="closeProgTableHandler.emit($event)"

          (sortColumnTraceHandler)="sortColumnTraceHandler.emit($event)"
          (filterColumnTraceHandler)="filterColumnTraceHandler.emit($event)"
          (hoverWidgetTraceHandler)="hoverWidgetTraceHandler.emit($event)">
        </ProgTable>

      </div>

    </ProgdashView>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      app-navbar {
        width: calc(100vw);
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
      }
      .class-picker {
        display: flex;
        align-items: center;
        margin: 0 5px;
      }
      .class-name {
        font-size: 19px;
        font-family: "Roboto Mono", monospace;
        font-weight: 600;
        color: cornflowerblue;
      }
      .sidenav {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 46px - 36px);
        overflow: hidden;
      }
      .logo {
        display: flex;
        height: 46px;
        align-items: center;
        justify-content: center;
        color: rgba(0, 0, 0, 0.87);
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: "Roboto Mono", monospace;
        background: rgba(255, 255, 255, 0.95);
      }
      .prog-table,
      .prog-table-btn {
        width: 98%;
        position: sticky;
        margin-left: auto;
      }
      .prog-table-btn {
        background: rgba(255, 215, 64, 0.95);
        color: rgba(0, 0, 0, 0.87);
      }
      .prog-table-menu-btn {
        border: 1px solid #ccc;
        border-radius: 2px;
        background: transparent;
        color: rgba(0,0,0,.87);
        margin-right: 6px;
        font-size: 13px;
      }
      .print-container {
        margin: 0 5px;
      }
    `,
  ],
})
export class ProgdashManagerComponent implements AfterContentInit {
  @ViewChild( 'board' ) boardElRef: ElementRef;

  @Input() isDataLoaded;
  @Input() isProgTableOpened;
  @Input() isStartPrintReport;

  @Input() usersByClass;
  @Input() insights;
  @Input() modulesData: {}[];

  @Input() selectedClass;
  @Input() selectedTimescale;
  @Input() selectedRules;
  @Input() selectedWidgets;

  @Output() timescaleHandler = new EventEmitter();
  @Output() selectClassHandler = new EventEmitter();
  @Output() userMoreMenuHandler = new EventEmitter();
  @Output() openProgTableHandler = new EventEmitter();
  @Output() closeProgTableHandler = new EventEmitter();

  @Output() checkRuleHandler = new EventEmitter();
  @Output() launchPVLiveHandler = new EventEmitter();
  @Output() cancelPVLiveHandler = new EventEmitter();

  @Output() startPrintReportHandler = new EventEmitter();
  @Output() closePrintReportHandler = new EventEmitter();
  @Output() checkWidgetHandler = new EventEmitter();
  @Output() printReportHandler = new EventEmitter();

  @Output() sortColumnTraceHandler = new EventEmitter();
  @Output() filterColumnTraceHandler = new EventEmitter();
  @Output() openUserDialogTraceHandler = new EventEmitter();
  @Output() hoverWidgetTraceHandler = new EventEmitter();

  classes$ = new BehaviorSubject<StoreField<ClassData>>({
    byId: {},
    allIds: [],
  });
  classDialogRef = null;
  marginOffset = 125;
  boardWidth;

  isProgTableRank = false;
  isProgTableCompare = true;
  isProgTableFilter = true;

  constructor ( public dialog: MatDialog ) {}

  ngAfterContentInit () {
    this.boardWidth = this.boardElRef.nativeElement.offsetWidth - this.marginOffset;
    // removed for now:
    // => a dialog box to choose a group/class after the view is init
    // if ( !this.selectedClass ) {
    //   this.classDialogRef = this.dialog.open( Modal, {
    //     width: '90vw',
    //     height: '90vh',
    //     disableClose: true,
    //     data: {
    //       classes: this.classes ? this.classes.byId : null,
    //       selectClassHandler: null,
    //       component: ClassManagerComponent,
    //     },
    //   });
    // }

    // this.classes$.subscribe( _ => {
    //   if ( this.classes && this.classes.allIds ) {
    //     this.classDialogRef.componentInstance.data = {
    //       ...this.classDialogRef.componentInstance.data,
    //       classes: this.classes.byId,
    //       selectClassHandler: this.onSelectClassDialog.bind( this ),
    //     };
    //   }
    // });
  }

  onUserMoreMenuClick ({ user, /*action*/ }) {
    this.dialog.open( Modal, {
      width: '70vw',
      height: '100vh',
      data: { user, component: UserDetailComponent },
    });
    // Trace purpose
    this.openUserDialogTraceHandler.emit( user );
  }

  onSelectClassDialog ( className: string ) {
    if ( this.classDialogRef ) {
      this.classDialogRef.close();
    }
    this.selectClassHandler.emit( className );
  }

  compareProgressionHandler () {
    this.isProgTableCompare = !this.isProgTableCompare;
  }

  rankUsersHandler () {
    this.isProgTableRank = !this.isProgTableRank;
  }

  showFiltersHandler () {
    this.isProgTableFilter = !this.isProgTableFilter;
  }

  @Input()
  set classes ( value ) {
    this.classes$.next( value );
  }

  get classes () {
    return this.classes$.getValue();
  }
}
