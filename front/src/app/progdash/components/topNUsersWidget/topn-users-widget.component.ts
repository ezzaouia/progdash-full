import { Component, OnInit, Input, EventEmitter } from '@angular/core';

/* tslint:disable component-selector  */
@Component({
  selector: 'TopNUsersWidget',
  template: `
    <mat-card class="widget-card" id="{{id}}">
      <mat-card-header>
        <mat-card-title>{{ title }}</mat-card-title>
        <PrintWidget
          *ngIf="isStartPrintReport"
          [widgetId]="id"
          [checked]="selectedWidgets.includes(id)"
          (checkWidgetHandler)="checkWidgetHandler.emit($event)">
        </PrintWidget>
      </mat-card-header>
      <mat-card-content>
        <mat-list role="list">
        <mat-divider></mat-divider>
        <div
          class="list-item"
          *ngFor="let item of topN">
            <div class="list-item-content">
              <span> {{ item.fullName }} </span>
              <div class="item-detail">
                <span class="item-sum">
                  {{ item.insights[timescale][key].sum | formatAttr:key }}
                </span>
                <DetlaWidget
                  [sign]="item.insights[timescale][key].sign"
                  [data]="item.insights[timescale][key].sumd | formatAttr:key">
                </DetlaWidget>
              </div>
            </div>
            <mat-divider></mat-divider>
        </div>
      </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [ `
    :host {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .widget-card {
      width: 100%;
      height: 100%;
      padding: 12px;
      box-sizing: border-box;
    }
    mat-card-content {
      padding: 12px 0px;
      height: 80%;
    }
    .title {
      margin: 12px;
    }
    .list-item {
      height: 60px;
      padding: 0px;
    }
    .list-item-content {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 16px;
    }
    .item-detail {
      margin-left: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .item-sum {
      font-size: 14px;
      font-weight: 500;
    }
  ` ],
})
export class TopNUsersWidgetComponent implements OnInit {

  @Input() title;
  @Input() topN;
  @Input() timescale;
  @Input() key;
  @Input() id;
  @Input() isStartPrintReport;
  @Input() checkWidgetHandler = new EventEmitter<{ isChecked: boolean; widgetId: string }>();
  @Input() selectedWidgets: string[];


  constructor () { }

  ngOnInit (): void { }
}
