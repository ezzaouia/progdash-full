import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <h2>🚚 Something very bad..!</h2>
  `,
  styles: [ `` ],
})
export class ErrorComponent implements OnInit {
  constructor () { }

  ngOnInit (): void { }
}
