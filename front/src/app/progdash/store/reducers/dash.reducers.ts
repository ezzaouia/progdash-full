import { filter, indexOf, startsWith, get, keyBy } from 'lodash';

import { DashActionsUnion, DashActionTypes, LoadUserInfo } from '../actions';
import { modulesDataAttr } from '../../utils/mappers';

export interface State {
  isDataLoaded: boolean;
  isProgTableOpened: boolean;
  isProgEvaluationOpened: boolean;
  isLoading: boolean;
  classes: any;
  selectedClass: any;
  selectedTimescale: string;
  selectedRules: string[];
  isStartPrintReport: boolean;
  selectedWidgets: string[];
  modulesData: {};
  areaId: number;
  userId: number;
}

const initialState: State = {
  isDataLoaded: false,
  isProgTableOpened: false,
  isProgEvaluationOpened: false,
  isLoading: false,
  classes: { allIds: [], byId: {} },
  selectedClass: {},
  selectedTimescale: 'lastWeek',
  selectedRules: [],
  isStartPrintReport: false,
  selectedWidgets: [],
  modulesData: {},
  areaId: 39422, // TODO FIXME
  userId: null,
};

export function reducers (
  state = initialState,
  action: DashActionsUnion
): State {
  switch ( action.type ) {
    case DashActionTypes.LoadUserInfo: {
      return {
          ...state,
          areaId: ( action as LoadUserInfo ).payload.areaId,
          userId: ( action as LoadUserInfo ).payload.userId,
      };
    }
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
      };
    }

    case DashActionTypes.LoadDataFailure: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case DashActionTypes.LoadGroupsData: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DashActionTypes.LoadGroupsDataSuccess: {
      return {
        ...state,
        isLoading: false,
        classes: {
          allIds: action.payload,
        },
      };
    }

    case DashActionTypes.LoadGroupsDataFailure: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case DashActionTypes.LoadGroupData: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case DashActionTypes.LoadGroupDataSuccess: {
      const { group, data } = action.payload;
      return {
        ...state,
        isLoading: false,
        modulesData: modulesDataPrep( _modulesData ),
        classes: {
          ...state.classes,
          byId: {
            ...state.classes.byId,
            [group.id]: {
              users: keyBy( get( data, 'users', []), ( o: any ) => o.id ),
              insights: get( data, 'insights', {}),
              evaluations: get( data, 'evaluations', []) ,
              modules: get( data, 'modules', []),
              pulledAt: new Date(),
            },
          },
        },
      };
    }

    case DashActionTypes.LoadGroupDataFailure: {
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
        isLoading: true,
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
        isProgEvaluationOpened: false,
      };
    }

    case DashActionTypes.OpenProgEvaluation: {
      return {
        ...state,
        isProgEvaluationOpened: true,
        isProgTableOpened: false,
      };
    }

    case DashActionTypes.OpenProgBoard: {
      return {
        ...state,
        isProgTableOpened: false,
        isProgEvaluationOpened: false,
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


export const classes = ( state: State ) => state.classes;
export const selectedClass = ( state: State ) => state.selectedClass;
export const selectedTimescale = ( state: State ) => state.selectedTimescale;
export const isDataLoaded = ( state: State ) => state.isDataLoaded;
export const isLoading = ( state: State ) => state.isLoading;
export const isProgTableOpened = ( state: State ) => state.isProgTableOpened;
export const isProgEvaluationOpened = ( state: State ) => state.isProgEvaluationOpened;
export const isStartPrintReport = ( state: State ) => state.isStartPrintReport;
export const selectedRules = ( state: State ) => state.selectedRules;
export const selectedWidgets = ( state: State ) => state.selectedWidgets;
export const modulesData = ( state: State ) => state.modulesData;
export const userInfo = ( state: State ) => ({ userId: state.userId, areaId: state.areaId });

// export const newClasses = ( state: State ) => state.newClasses;
// export const insights = ( state: State ) => state.insights;
// export const rawData = ( state: State ) => state.rawData;
// export const usersByClass = ( state: State ) => state.usersByClass;

const modulesDataPrep = mdata => {
  return modulesDataAttr ( mdata );
};

// TODO REMOVE THIS
const _modulesData = [
  {
    key: 'Orthotypographie',
    index: 0, // l'ordre (inverse d'affichage)
    nbrOfRules: 24, // nombre de règles du module
  },
  {
    key: 'Pont supérieur',
    index: 1,
    nbrOfRules: 56,
  },
  {
    key: 'Pro',
    index: 2,
    nbrOfRules: 84,
  },
  {
    key: 'Les Fondamentaux Campus',
    index: 3,
    nbrOfRules: 47,
  },
  {
    key: 'Supérieur',
    index: 2, // j'affiche pas
    nbrOfRules: 140,
    sameAs: [ 'Pont supérieur', 'Pro' ],
  },
];
