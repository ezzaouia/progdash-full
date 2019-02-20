import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { Http } from '@angular/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Action, select} from '@ngrx/store';
import * as fromStore from '../store';
import {UserService} from './user.service';

//const API_URL = environment.apiUrl;
const API_URL = 'http://localhost:8080';
@Injectable()
export class TraceService {
    private sessionId: String;
    private userInfo$ = new BehaviorSubject<{userId: number, areaId: number}>( null);

    constructor(private http: Http, private userSevice: UserService) {
        this.sessionId = this.uuidv4();
    }

    public createTrace(trace: Action) {
        const data = {
            actionType: trace.type, 
            payload: (trace as any).payload,
            teacherId: this.userSevice.getUserId(),
            sessionId: this.sessionId,
            areaId: this.userSevice.getAreaId()
        };
        let formData = new FormData();
        formData.append('data', new Blob([JSON.stringify(data)], {
            type: "application/json"
        }));
        if((trace as any).payload && (trace as any).payload.blob) {
            formData.append('file', new Blob([(trace as any).payload.blob], {
                type: "application/pdf"
            }));
        }
        return this.http
            .post(API_URL + '/teacher/trace', formData)
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
