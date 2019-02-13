import { InMemoryDbService } from 'angular-in-memory-web-api';
import { v4 as uuid } from 'uuid';

export class InMemoryMockDataService implements InMemoryDbService {

  createDb () {
    const dashs = [
      {
        id: uuid(),
        title: 'dash #1',
        isDefault: true,
        owner: 'me',
        links: [ 'link#1', 'link#2' ],
        grid: [
          { id:  uuid(), cols: { x: 0, y: 0, cols: 1, rows: 1 }, widget: 1 },
        ],
      },
      {
        id: uuid(),
        title: 'dash #2',
        owner: 'me',
        links: [ 'link#1', 'link#2' ],
        grid: [
          { id:  uuid(), cols: { x: 0, y: 0, cols: 1, rows: 1 }, widget: null },
        ],
      },
      {
        id: uuid(),
        title: 'dash #3',
        owner: 'me',
        links: [ 'link#1', 'link#2' ],
        grid: [
          { id:  uuid(), cols: { x: 0, y: 0, cols: 1, rows: 1 }, widget: null },
        ],
      },
      {
        id: uuid(),
        title: 'dash #4',
        owner: 'me',
        links: [ 'link#1', 'link#2' ],
        grid: [
          { id:  uuid(), cols: { x: 0, y: 0, cols: 1, rows: 1 }, widget: null },
        ],
      },
    ];
    const univers = [
      {
        id: uuid(),
        name: 'College 1',
        userid: 1,
      },
      {
        id: uuid(),
        name: 'College 2',
        userid: 2,
      },
      {
        id: uuid(),
        name: 'Lycee 1',
        userid: 3,
      },
    ];
    const charts = [
      {
        id: 1,
        title: 'Chart 1',
        type: 'Bar',
        data: 'Progress',
      },
      {
        id: 2,
        title: 'Chart 2',
        type: 'Line',
        data: 'Motivation',
        img: '',
      },
      {
        id: 3,
        title: 'Chart 3',
        type: 'Area',
        data: 'Effort',
      },
      {
        id: 4,
        title: 'Chart 4',
        data: 'Time spent',
      },
    ];
    return { dashs, univers, charts };
  }

}
