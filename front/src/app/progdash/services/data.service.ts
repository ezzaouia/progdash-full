import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private baseUrl = 'http://localhost:3000/';

  constructor () { }

  loadData$ ( filter ) {
    if ( !filter /* || filter === 'All' */) {
      return; /** with filter */
    }
    return; /** without filter */
  }

}
