import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = environment.SUIVI_STATS_URL;
@Injectable()
export class TeacherService {

    constructor ( private http: HttpClient ) {
    }

    public getLink ({ lessons, userInfo }) {
        const httpOptions = {
            headers: new HttpHeaders({
              'X-Requested-With':  'XMLHttpRequest',
              'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };

        // const body = new HttpParams();
        const formData = new FormData();

        for ( const l of lessons ) {
          formData.append( 'chapters[]',  l );
        }

        const pathApi = API_URL +
            `/services-pjv/rest/manager/area/${userInfo.areaId}/teacher/module/url`;

        return this.http
            .post<{status: String, data: String}>( pathApi, formData )
            .pipe(
                map( response => {
                    if ( response.status === 'error' ) {
                        throw new Error( 'impossible d\'obtenir le mode présentiel' );
                    }
                    return response.data;
                })
            );
    }

}
