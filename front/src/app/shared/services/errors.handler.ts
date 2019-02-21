import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from './notification.service';
import { ErrorsService } from './errors.service';

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
        return notificationService.notify( 'No Internet Connection' );
      } else {
        // Handle Http Error (error.status === 403, 404...)
        errorsService.log( error );
        // return notificationService.notify( `${error.status} - ${error.message}` );
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      errorsService.log( error );
      // router.navigate([ '/error' ], { queryParams: { error: error } });
    }
    // Log the error anyway
    console.error( 'It happens: ', error );
  }
}
