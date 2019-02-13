import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'UserTimelineWidget',
  template: `
    <div #parent class="widget-card">
      <h4 class="title">{{ title }}</h4>
       <div class="widget-content">
         <!--
         <MlineChart
           [data]="[userData]"
           [width]="offsetWidth"
           [height]="400"
           [modulesData]="[]"
           [timeScale]="'day'"
           [ykey]="'sumscore'">
         </MlineChart>
         -->
       </div>
    </div>
  `,
  styles: [ `
    :host {
      display: flex;
      width: calc(100% - 0px);
      height: calc(100% - 0px);
    }
    .widget-card {
      width: calc(100% - 0px);
      height: calc(100% - 0px);
    }
    .widget-content {
      width: calc(100% - 0px);
      height: calc(100% - 0px);
    }
    .title {
      margin: 12px;
    }
  ` ],
})
export class UserTimelineWidgetComponent implements OnInit {

  @Input() title;
  @Input() userData;
  @Input() offsetWidth;

  constructor () { }

  ngOnInit (): void { }
}
