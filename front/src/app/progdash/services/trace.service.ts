import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

//const API_URL = environment.apiUrl;
const API_URL = 'http://localhost:8080';
@Injectable()
export class TraceService {
    private sessionId: String;

    constructor(private http: Http) { 
        this.sessionId = this.uuidv4();
    }

    public createTrace(trace: Action) {
        const data = {
            actionType: trace.type, 
            payload: (trace as any).payload,
            teacherId: 1,
            sessionId: this.sessionId,
            areaId: 1
        };
        return this.http
            .post(API_URL + '/teacher/trace', data)
            .pipe(
                map(response => {
                    return trace;
                }),
                catchError(this.handleError)
            );
    }

    private handleError(error: Response | any) {
        console.error('TraceService::handleError', error);
        return Observable.throw(error);
    }

    private uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

}
