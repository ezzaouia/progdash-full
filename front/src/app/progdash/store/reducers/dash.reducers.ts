import { indexOf, filter, startsWith } from 'lodash';

import { DashActionTypes, DashActionsUnion } from '../actions';
import {
  StoreField,
  UserData,
  InsightData,
  RuleData,
  ClassData
} from '../types';

export interface State {
  isDataLoaded: boolean;
  isProgTableOpened: boolean;
  isLoading: boolean;
  rawData: any[];
  usersByClass: StoreField<UserData>;
  insights: StoreField<InsightData>;
  rules: StoreField<RuleData>;
  classes: StoreField<ClassData>;
  selectedClass: string;
  selectedTimescale: string;
  selectedRules: string[];
  isStartPrintReport: boolean;
  selectedWidgets: string[];
  modulesData: {};
}

const initialState: State = {
  isDataLoaded: false,
  isProgTableOpened: false,
  isLoading: false,
  rawData: [],
  usersByClass: null,
  insights: null,
  rules: null,
  classes: null,
  selectedClass: null,
  selectedTimescale: 'lastWeek',
  selectedRules: [],
  isStartPrintReport: false,
  selectedWidgets: [],
  modulesData: {},
};

export function reducers (
  state = initialState,
  action: DashActionsUnion
): State {
  switch ( action.type ) {
    case DashActionTypes.LoadData: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DashActionTypes.LoadDataSuccess: {
      return {
        ...state,
        isLoading: false,
        // rawData: action.payload,
      };
    }

    case DashActionTypes.LoadDataFailure: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case DashActionTypes.RunDataPrepComplete: {
      return {
        ...state,
        isDataLoaded: true,
        ...action.payload,
      };
    }

    case DashActionTypes.SelectClass: {
      return {
        ...state,
        selectedClass: action.payload,
      };
    }

    case DashActionTypes.SelectTimescale: {
      return {
        ...state,
        selectedTimescale: action.payload,
      };
    }

    case DashActionTypes.OpenProgTable: {
      return {
        ...state,
        isProgTableOpened: true,
      };
    }

    case DashActionTypes.CloseProgTable: {
      return {
        ...state,
        isProgTableOpened: false,
      };
    }

    case DashActionTypes.CheckRule: {
      const { isChecked, ruleId } = action.payload;

      if ( isChecked ) {
        // adding ruleId
        return {
          ...state,
          selectedRules: [ ...state.selectedRules, ruleId ],
        };
      } else {
        // removing rule
        const index = indexOf( state.selectedRules, ruleId );

        if ( index === -1 ) {
          return state;
        } else {
          return {
            ...state,
            selectedRules: [
              ...state.selectedRules.slice( 0, index ),
              ...state.selectedRules.slice( index + 1 ),
            ],
          };
        }
      }
    }

    case DashActionTypes.CancelPVLive: {
      return {
        ...state,
        selectedRules: [],
      };
    }

    case DashActionTypes.StartPrintReport: {
      return {
        ...state,
        isStartPrintReport: true,
      };
    }

    case DashActionTypes.ClosePrintReport: {
      return {
        ...state,
        isStartPrintReport: false,
        selectedWidgets: [],
      };
    }

    case DashActionTypes.CheckWidget: {
      const { isChecked, widgetId } = action.payload;

      if ( isChecked ) {
        // adding widget
        let sw = state.selectedWidgets;
        // if we have table view in the report
        // no rows are allowed
        if ( widgetId === 'table-view' ) {
          sw = filter( state.selectedWidgets, w => !startsWith( w, 'table-row' ));
        }

        return {
          ...state,
          selectedWidgets: [ ...sw, widgetId ],
        };
      } else {
        // removing widget
        const index = indexOf( state.selectedWidgets, widgetId );

        if ( index === -1 ) {
          return state;
        } else {
          return {
            ...state,
            selectedWidgets: [
              ...state.selectedWidgets.slice( 0, index ),
              ...state.selectedWidgets.slice( index + 1 ),
            ],
          };
        }
      }
    }

    case DashActionTypes.PrintReport: {
      return {
        ...state,
        isStartPrintReport: false,
      };
    }

    case DashActionTypes.PrintReportSuccess: {
      return {
        ...state,
        selectedWidgets: [],
        isStartPrintReport: false,
      };
    }

    case DashActionTypes.PrintReportFailure: {
      // TODO
      // need to show a message here? Try again?
      return {
        ...state,
        selectedWidgets: [],
        isStartPrintReport: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const rawData = ( state: State ) => state.rawData;
export const usersByClass = ( state: State ) => state.usersByClass;
export const classes = ( state: State ) => state.classes;
export const insights = ( state: State ) => state.insights;
export const selectedClass = ( state: State ) => state.selectedClass;
export const selectedTimescale = ( state: State ) => state.selectedTimescale;
export const isDataLoaded = ( state: State ) => state.isDataLoaded;
export const isProgTableOpened = ( state: State ) => state.isProgTableOpened;
export const isStartPrintReport = ( state: State ) => state.isStartPrintReport;
export const selectedRules = ( state: State ) => state.selectedRules;
export const selectedWidgets = ( state: State ) => state.selectedWidgets;
export const modulesData = ( state: State ) => state.modulesData;
