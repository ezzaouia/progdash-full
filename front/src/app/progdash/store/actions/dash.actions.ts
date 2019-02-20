import { Action } from '@ngrx/store';

export enum DashActionTypes {
  LoadData = '[Dash] Load Data',
  LoadDataSuccess = '[Dash] Load Data Sucess',
  LoadDataFailure = '[Dash] Load Data Failure',
  RunDataPrep = '[Dash] Run Data Prep',
  RunDataPrepComplete = '[Dash] Run Data Prep Complete',

  SelectClass = '[Dash] Select Class',
  SelectTimescale = '[Dash] Select Timescale',
  OpenProgTable = '[Dash] Open Prog Table',
  OpenProgBoard = '[Dash] Open Prog Board',
  OpenProgEvaluation = '[Dash] Open Prog Evaluation',

  CheckRule = '[Dash] Check Rule',
  LaunchPVLive = '[Dash] Launch PV Live',
  CancelPVLive = '[Dash] Cancel PV Live',

  StartPrintReport = '[Dash] Start Print Report',
  ClosePrintReport = '[Dash] Close Print Report',
  CheckWidget = '[Dash] Check Widget',
  PrintReport = '[Dash] Print Report',
  HotPrintWidget = '[Dash] Hot Print Widget',

  PrintReportSuccess = '[Dash] Print Report Success',
  PrintReportFailure = '[Dash] Print Report Failure',

  // For tracing purpose
  SortColumn = '[Dash] Sort Column',
  FilterColumn = '[Dash] Filter Column',
  OpenUserDialog = '[Dash] Open User Dialog',
  HoverWidget = '[Dash] Hover Widget',
}

export class LoadData implements Action {
  readonly type = DashActionTypes.LoadData;
}

export class LoadDataSuccess implements Action {
  readonly type = DashActionTypes.LoadDataSuccess;

  constructor ( public payload: any  ) {}
}

export class LoadDataFailure implements Action {
  readonly type = DashActionTypes.LoadDataFailure;

  constructor ( public payload: any ) {}
}

export class RunDataPrep implements Action {
  readonly type = DashActionTypes.RunDataPrep;
}

export class RunDataPrepComplete implements Action {
  readonly type = DashActionTypes.RunDataPrepComplete;

  constructor ( public payload: any ) {}
}

export class SelectClass implements Action {
  readonly type = DashActionTypes.SelectClass;

  constructor ( public payload: string ) {}
}

export class OpenProgTable implements Action {
  readonly type = DashActionTypes.OpenProgTable;
}

export class OpenProgBoard implements Action {
  readonly type = DashActionTypes.OpenProgBoard;
}

export class OpenProgEvaluation implements Action {
  readonly type = DashActionTypes.OpenProgEvaluation;
}

export class SelectTimescale implements Action {
  readonly type = DashActionTypes.SelectTimescale;

  constructor ( public payload: string ) {}
}

export class CheckRule implements Action {
  readonly type = DashActionTypes.CheckRule;

  constructor ( public payload: { isChecked: boolean; ruleId: string }) {}
}

export class LaunchPVLive implements Action {
  readonly type = DashActionTypes.LaunchPVLive;
}

export class CancelPVLive implements Action {
  readonly type = DashActionTypes.CancelPVLive;
}

export class StartPrintReport implements Action {
  readonly type = DashActionTypes.StartPrintReport;
}

export class ClosePrintReport implements Action {
  readonly type = DashActionTypes.ClosePrintReport;
}

export class CheckWidget implements Action {
  readonly type = DashActionTypes.CheckWidget;

  constructor ( public payload: { isChecked: boolean; widgetId: string }) {}
}

export class PrintReport implements Action {
  readonly type = DashActionTypes.PrintReport;

  constructor ( public payload: string[]) {}
}

export class HotPrintWidget implements Action {
  readonly type = DashActionTypes.HotPrintWidget;

  constructor ( public payload: string ) {}
}

export class PrintReportSuccess implements Action {
  readonly type = DashActionTypes.PrintReportSuccess;

  constructor ( public payload: any ) {}
}

export class PrintReportFailure implements Action {
  readonly type = DashActionTypes.PrintReportFailure;

  constructor ( public payload: string ) {}
}

export class SortColumn implements Action {
  readonly type = DashActionTypes.SortColumn;

  constructor ( public payload: any ) {}
}

export class FilterColumn implements Action {
  readonly type = DashActionTypes.FilterColumn;

  constructor ( public payload: any ) {}
}

export class OpenUserDialog implements Action {
  readonly type = DashActionTypes.OpenUserDialog;

  constructor ( public payload: any ) {}
}

export class HoverWidget implements Action {
  readonly type = DashActionTypes.HoverWidget;

  constructor ( public payload: any ) {}
}

export type DashActionsUnion =
  | LoadData
  | LoadDataSuccess
  | LoadDataFailure
  | RunDataPrep
  | RunDataPrepComplete
  | SelectClass
  | SelectTimescale
  | OpenProgTable
  | OpenProgBoard
  | OpenProgEvaluation
  | CheckRule
  | LaunchPVLive
  | CancelPVLive
  | StartPrintReport
  | ClosePrintReport
  | CheckWidget
  | PrintReport
  | PrintReportSuccess
  | PrintReportFailure
  | SortColumn
  | FilterColumn
  | OpenUserDialog
  | HoverWidget
  | HotPrintWidget;
