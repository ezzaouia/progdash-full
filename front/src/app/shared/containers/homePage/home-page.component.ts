import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as fromStore from '../../../progdash/store';
import { Store, select } from '@ngrx/store';
import { NotificationService } from '../../services';

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
  constructor ( private route: ActivatedRoute, private store: Store<fromStore.State>, private notificationService: NotificationService ) { }

  ngOnInit (): void {
      const user: string = this.route.snapshot.queryParamMap.get( 'user' );
      const area: string = this.route.snapshot.queryParamMap.get( 'area' );
      const userId: number = parseInt( user, 10 );
      const areaId: number = parseInt( area, 10 );
      if ( !isNaN( userId ) && !isNaN( areaId )) {
          this.store.dispatch( new fromStore.LoadUserInfo({
              userId: userId as number,
              areaId: areaId as number,
          }));
      } else {
          this.notificationService.error( 'user info', 'L\'url ne contient pas les bonnes' +
              ' informations' );
      }
  }


}
