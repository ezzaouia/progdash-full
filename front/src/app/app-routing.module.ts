import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';

import { environment } from '../environments/environment';
import { NotFoundComponent, HomePageComponent, ErrorComponent } from './shared/components';

const externalUrlProvider = new InjectionToken( 'externalUrlRedirectResolver' );

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'suivi',
        loadChildren: './progdash/progdash.module#ProgdashModule',
      },
      {
        path: '',
        redirectTo: 'suivi',
        pathMatch: 'full',
      },
      {
        path: 'externalPVRedirect',
        canActivate: [ externalUrlProvider ],
        component: NotFoundComponent,
      },
      {
        path: 'externalSuiviStatsRedirect',
        canActivate: [ externalUrlProvider ],
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue: ( route: ActivatedRouteSnapshot ) => {
        console.log( ' ====> [window.open] Start' );
        const externalUrl = route.paramMap.get( 'externalUrl' );
        const isSelf = route.paramMap.get( 'isSelf' );
        console.log( ' ====> Ready get params', externalUrl, isSelf );
        window.open( externalUrl, isSelf ? '_self' : '_blank' );
        console.log( ' ====> [window.open] Fire', externalUrl, isSelf );
      },
    },
  ],
  imports: [
    RouterModule.forRoot( AppRoutes, {
      useHash: true,
      enableTracing: !environment.production,
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
