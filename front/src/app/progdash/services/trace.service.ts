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

    constructor(private http: Http) { }

    public createTrace(trace: Action) {
        const data = {actionType: trace.type, payload: (trace as any).payload};
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

}
