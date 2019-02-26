// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loglevel: 4,
  hmr: false,
  apiUrl: 'http://woonoz.api-url',
  pvApiUrl: 'http://woonoz.pv.api-url',
  API_URL: 'http://192.168.0.12:8080',
  SUIVI_STATS_URL: 'https://statistiques.projet-voltaire.fr'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

