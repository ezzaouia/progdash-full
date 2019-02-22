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
        const externalUrl = route.paramMap.get( 'externalUrl' );
        window.open( externalUrl, '_blank' );
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
