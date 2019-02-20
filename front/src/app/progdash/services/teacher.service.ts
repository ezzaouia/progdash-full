import { Injectable } from '@angular/core';
//import { environment } from 'environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

//const API_URL = environment.apiUrl;
const API_URL = 'https://pre3.statistiques.projet-voltaire.fr';
@Injectable()
export class TeacherService {

    constructor(private http: HttpClient) { 
    }

    public getLink(lessons: string[]) {
        const httpOptions = {
            headers: new HttpHeaders({
              'X-Requested-With':  'XMLHttpRequest',
              'Content-Type': 'application/x-www-form-urlencoded'
            })
        };

        const body = new HttpParams();
        for (const l of lessons) {
          body.set('lessons[]', l);  
        }

        return this.http
            .post<{status: String, data: String}>(API_URL + '/fr/sphere/pv/enseignant/lien', body.toString(), httpOptions)
            .pipe(
                map(response => {
                    return response.data;
                })
            );
    }

}
