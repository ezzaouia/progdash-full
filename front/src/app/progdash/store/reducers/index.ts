import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as rootStore from '../../../store/reducers';
import * as fromDash from './dash.reducers';

export interface State {
  dash: fromDash.State;
}

export const reducers: ActionReducerMap<State> = {
  dash: fromDash.reducers,
};

const _state = createFeatureSelector<State>( 'progdash' );
const _shared = createSelector( _state, ( state: State ) => state.dash );

export const rawData = createSelector( _shared, fromDash.rawData );
export const classes = createSelector( _shared, fromDash.classes );
export const usersByClass = createSelector( _shared, fromDash.usersByClass );
export const insights = createSelector( _shared, fromDash.insights );
export const selectedClass = createSelector( _shared, fromDash.selectedClass );
export const selectedTimescale = createSelector( _shared, fromDash.selectedTimescale );
export const isDataLoaded = createSelector( _shared, fromDash.isDataLoaded );
export const isProgTableOpened = createSelector( _shared, fromDash.isProgTableOpened );
export const isProgEvaluationOpened = createSelector( _shared, fromDash.isProgEvaluationOpened );
export const isStartPrintReport = createSelector( _shared, fromDash.isStartPrintReport );
export const selectedRules = createSelector( _shared, fromDash.selectedRules );
export const selectedWidgets = createSelector( _shared, fromDash.selectedWidgets );
export const modulesData = createSelector( _shared, fromDash.modulesData );
