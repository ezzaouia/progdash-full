import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProgdashDataService {

  API_URL = environment.API_URL;

  constructor ( private http: HttpClient ) { }

  loadData$ ( filter ) {
    if ( !filter /* || filter === 'All' */) {
      return; /** with filter */
    }
    return; /** without filter */
  }

  loadGroupsData$ ({ areaId }) {
    return this.http.get( `${this.API_URL}/statistics/area/${areaId}/groups` );
  }

}
