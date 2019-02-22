import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = environment.STAT_URL;
@Injectable()
export class TeacherService {

    constructor ( private http: HttpClient ) {
    }

    public getLink ( lessons: string[]) {
        const httpOptions = {
            headers: new HttpHeaders({
              'X-Requested-With':  'XMLHttpRequest',
              'Content-Type': 'application/x-www-form-urlencoded',
            }),
        };

        const body = new HttpParams();
        for ( const l of lessons ) {
          body.set( 'lessons[]', l );
        }

        const pathApi = API_URL + '/fr/sphere/pv/enseignant/lien';

        return this.http
            .post<{status: String, data: String}>( pathApi, body.toString(), httpOptions )
            .pipe(
                map( response => {
                    return response.data;
                })
            );
    }

}
