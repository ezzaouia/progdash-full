import { Injectable, Injector } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material";
import {SnackNotifyComponent} from "../components/snackNotify";

@Injectable()
export class NotificationService {

  constructor ( private injector: Injector , private deviceService: DeviceDetectorService, private snackBar: MatSnackBar) {}

  notify ( ...args ) {
    const horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    const verticalPosition: MatSnackBarVerticalPosition = 'top';

    this.snackBar.openFromComponent(SnackNotifyComponent, {
      duration: 2000,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      data: {  message :`Notify ${args.join( ' , ' )}`, htmClass: "info" }
    });
  }

  notifyError (message: string) {
    const horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    const verticalPosition: MatSnackBarVerticalPosition = 'top';

    this.snackBar.openFromComponent(SnackNotifyComponent, {
      duration: 2000,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      data: {message, htmClass: "error"}
    });
  }

  trace ( action ) {
    const _action = this.addContextInfo ( action );
    console.groupCollapsed( '[ ** TRACE **]' );
    console.table( _action );
    console.groupEnd();
    // TODO
    // Sent To Server
  }

  error ( error, originError? ) {
    console.error( '[originError]', originError );
    const _error = this.addContextInfo ( error );
    // TODO
    //     // Sent To Server
  }

  /**
   * Add context to a normal the trace.
   *
   * User Id
   * Time
   * Session id
   * Browser info
   * Location
   */
  addContextInfo ( data ) {
    const device = this.deviceService.getDeviceInfo();
    const appId = 'TODO_APP';
    const user = 'TODO_USER';
    const time = new Date().getTime();
    const id = `${appId}-${user}-${time}`;
    const location = this.injector.get( LocationStrategy );
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    return { ...data, appId, user, time, id, location, url, device };
  }

}
