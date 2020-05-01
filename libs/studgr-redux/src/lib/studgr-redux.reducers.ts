/* Import reducers here */
import { ActionReducerMap } from '@ngrx/store';
import { DashboardReducer } from './studgr-redux/dashboard/dashboard.reducer';


// https://www.concretepage.com/angular-2/ngrx/ngrx-store-4-angular-5-tutorial

export interface AppState {
  working?: boolean;
	dashboard?: DashboardState;
}

export interface DashboardState {
  loaded?: any;
  ids?: any;
  entities?: any;
}

export const reducers: ActionReducerMap<AppState> = {
  dashboard: DashboardReducer,
};
