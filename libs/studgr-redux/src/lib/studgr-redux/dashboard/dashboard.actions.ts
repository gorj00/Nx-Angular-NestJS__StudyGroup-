import { Action } from '@ngrx/store';
import * as EVENTS from './dasboard.events';

export class DasboardLoading implements Action {
  readonly type = EVENTS.LOADING;
}

export class DasboardLoadingSuccess implements Action {
  readonly type = EVENTS.SUCCESS;
}

export class DasboardLoadingFailure implements Action {
  readonly type = EVENTS.FAILURE;
  constructor(public error: any) {}
}

export type DashboardActions =
              DasboardLoading        |
              DasboardLoadingSuccess |
              DasboardLoadingFailure;


