import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <app-home-view>
      <app-container></app-container>
    </app-home-view>
  `,
  styles: [ `` ],
})
export class HomePageComponent implements OnInit {
  constructor () { }

  ngOnInit (): void { }


}
