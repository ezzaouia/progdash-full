import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

/* tslint:disable component-selector  */
@Component({
  selector: 'MoreMenu',
  template: `
    <button mat-menu-item>
      <mat-icon>power_settings_new</mat-icon>
      Déconnexion
    </button>
    <button mat-menu-item>
      <mat-icon>group_work</mat-icon>
      Evaluations
    </button>
  `,
  styles: [ `
    :host {
    }
  ` ],
})
export class MoreMenuComponent implements OnInit {

  constructor () { }

  ngOnInit (): void { }

}
