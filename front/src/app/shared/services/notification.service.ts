import { Injectable, Injector } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class NotificationService {

  constructor ( private injector: Injector , private deviceService: DeviceDetectorService ) {}

  notify ( ...args ) {
    alert( `Notify ${args.join( ' , ' )} ` );
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
    // Sent To Server
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
