import { Injectable, Injector } from '@angular/core';
// import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { v4 as uuid } from 'uuid';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { DeviceDetectorService } from 'ngx-device-detector';

import { UserService } from './user.service';

// const API_URL = environment.apiUrl;
const API_URL = 'http://localhost:8080';
@Injectable()
export class TraceService {
    private sessionId: String;
    private userInfo$ = new BehaviorSubject<{userId: number, areaId: number}>( null );
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
      }),
    };

    constructor (
      private http: Http,
      private userSevice: UserService,
      private newHttp: HttpClient,
      private injector: Injector,
      private deviceService: DeviceDetectorService, ) {
        this.sessionId = uuid();
    }

    public createTrace ( trace: Action ) {
        const data = {
            actionType: trace.type,
            payload: ( trace as any ).payload,
            teacherId: this.userSevice.getUserId(),
            sessionId: this.sessionId,
            areaId: this.userSevice.getAreaId(),
            clientTimestamp: new Date().getTime(),
        };
        const formData = new FormData();
        formData.append( 'data', new Blob([ JSON.stringify( data ) ], {
            type: 'application/json',
        }));
        if (( trace as any ).payload && ( trace as any ).payload.blob ) {
            formData.append( 'file', new Blob([ ( trace as any ).payload.blob ], {
                type: 'application/pdf',
            }));
        }
        return this.http.post( API_URL + '/teacher/trace', formData );
    }

    public createAudit ( error ) {
      const payload = this.addContextInfo( error );
       return this.newHttp.post<any>( API_URL + '/audit/create', payload, this.httpOptions );
    }

   /**
   * Add needed context info to a trace OR error
   */
    private addContextInfo ( data ) {
      const device = this.deviceService.getDeviceInfo();
      const teacherId =  this.userSevice.getUserId();
      const sessionId = this.sessionId;
      const areaId = this.userSevice.getAreaId();
      const clientTimestamp = new Date().getTime();
      // maybe not as much important for now as we have only one route
      const location = this.injector.get( LocationStrategy );
      const url = location instanceof PathLocationStrategy ? location.path() : '';
      return { ...data, teacherId, areaId, sessionId, clientTimestamp, location, url, device };
    }

}
