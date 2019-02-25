import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from './notification.service';
import { ErrorsService } from './errors.service';
import { environment } from '../../../environments/environment';


// source https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor (
    // Because the ErrorHandler is created before
    // the providers, we’ll have to use the Injector to get them.
    private injector: Injector
  ) {}

  handleError ( error: Error | HttpErrorResponse ) {
    const notificationService = this.injector.get( NotificationService );
    const router = this.injector.get( Router );
    const errorsService = this.injector.get( ErrorsService );

    if ( error instanceof HttpErrorResponse ) {
      // Server or connection error happened
      if ( !navigator.onLine ) {
        // Handle offline error
        return notificationService.notifyError( 'No Internet Connection' );
      } else if ( error.status === 401 || error.status === 403 ) {
        // send audit to server
        // errorsService.log( error );

        // redirect
        router.navigate(
          [
            '/externalSuiviStatsRedirect',
            { externalUrl: `${environment.SUIVI_STATS_URL}/guard/login`, isSelf : true },
          ],
          { skipLocationChange: false }
        );

      } else {
        // Handle Http Error (error.status === 403, 404...)
        // return notificationService.notify( `${error.status} - ${error.message}` );

        // send audit to server
        // errorsService.log( error );
        // redirect is handled by '**' route in app routing module
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      // send audit to server
      // errorsService.log( error );
      // redirect is handled
      router.navigate([ '/error' ]);
    }
    // Log the error anyway
    console.error( 'It happens: ', error );

    // errorsService.log( error );

  }
}
