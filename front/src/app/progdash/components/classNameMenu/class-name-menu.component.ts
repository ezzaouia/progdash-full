import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

/* tslint:disable component-selector  */
@Component({
  selector: 'ClassNameMenu',
  template: `
    <button
      mat-menu-item
      *ngFor="let clazz of classListData"
      (click)="selectClassHandler.emit( clazz )">
        <span>{{ clazz.name }}</span>
    </button>
  `,
  styles: [ `
    :host {
    }
  ` ],
})
export class ClassNameMenuComponent implements OnInit {

  @Output() selectClassHandler = new EventEmitter();
  @Input() classListData;

  constructor () { }

  ngOnInit (): void { }

}
