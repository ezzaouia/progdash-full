import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

/* tslint:disable component-selector  */
@Component({
  selector: 'MoreMenu',
  template: `
    <button mat-menu-item (click)="signOut()">
      <mat-icon>power_settings_new</mat-icon>
      Déconnexion
    </button>
    <button mat-menu-item (click)="goToStatistic()">
      <mat-icon>arrow_back</mat-icon>
      Retour au portail
    </button>
  `,
  styles: [ `
    :host {
    }
  ` ],
})
export class MoreMenuComponent implements OnInit {

  constructor ( private userService: UserService, private router: Router ) { }

  ngOnInit (): void { }

  signOut () {
    const externalUrl = `${environment.SUIVI_STATS_URL}/guard/logout`;
    console.log( ' ====> signOut externalSuiviStatsRedirect',
      environment.SUIVI_STATS_URL, externalUrl );

    this.router.navigate([
        '/externalSuiviStatsRedirect',
        {
          externalUrl, // `${environment.SUIVI_STATS_URL}/guard/logout'`,
          isSelf : true,
        } ],
      { skipLocationChange: false }
    );
  }

  goToStatistic () {
    const areaId = this.userService.getAreaId();
    const externalUrl = `${environment.SUIVI_STATS_URL}/sphere/${areaId}/statistiques`;
    console.log( ' ====> goToStatistic externalSuiviStatsRedirect',
      environment.SUIVI_STATS_URL, areaId, externalUrl );

    this.router.navigate([
        '/externalSuiviStatsRedirect',
        {
          externalUrl,
          isSelf : true,
        } ],
      { skipLocationChange: false }
    );
  }
}
