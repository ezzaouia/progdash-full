import { scaleOrdinal, schemeCategory10 } from 'd3';
import {
  chain,
  mapValues,
  map,
  each,
  filter,
  size,
  differenceBy,
  orderBy,
  keys,
  maxBy,
  keyBy
} from 'lodash';

export const modulesDataAttr = modulesData => {
  // equivalent modules will not be displayed in same line
  const routeWithMaxNbrOfModule = chain( modulesData )
    .groupBy( 'routeId' )
    .mapValues( size )
    .value();

  const maxId = maxBy(
    keys( routeWithMaxNbrOfModule ),
    k => routeWithMaxNbrOfModule[k]
  );

  const route1 = filter( modulesData, d => d.routeId === +maxId );
  const route2 = filter( modulesData, d => d.routeId !== +maxId );
  const all = [ ...route1, ...differenceBy( route2, route1, 'key' ) ];

  const sorted = orderBy( all, [ 'index' ], [ 'desc' ]);
  const displayed = orderBy( route1, [ 'index' ], [ 'desc' ]);

  const forLabel = [];
  const forLine = [];
  let rf, sf, rSumOfTopRules, sSumOfTopRules;

  each( displayed, ( v, __ ) => {
    rf = filter( displayed, ( e, ___ ) => e.index <= v.index );
    rSumOfTopRules = chain( rf )
      .map( 'nbrOfRules' )
      .sum()
      .value();
    forLabel.push({ ...v, rSumOfTopRules });
  });

  each( sorted, ( v, __ ) => {
    sf = filter( displayed, ( e, ___ ) => e.index < v.index );
    sSumOfTopRules = chain( sf )
      .map( 'nbrOfRules' )
      .sum()
      .value();
    forLine.push({ ...v, sSumOfTopRules });
  });

  const colorScheme = scaleOrdinal( schemeCategory10 ).domain(
    map( forLine, 'key' )
  );
  const forColor = mapValues( keyBy( forLine, 'key' ), ( _, key ) =>
    colorScheme( key )
  );
  const displayedNbrOfRules = chain( displayed )
    .map( 'nbrOfRules' )
    .sum()
    .value();

  return {
    all,
    forLabel,
    forLine,
    forColor,
    displayedNbrOfRules, // only displyed modules
  };
};
