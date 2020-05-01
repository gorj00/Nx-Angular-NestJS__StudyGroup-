import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as EVENTS from './dasboard.events';

import * as DashboardActions from './dashboard.actions';
import { DashboardEntity } from './dashboard.models';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

// TODO: Delete
export interface State extends EntityState<DashboardEntity> {
  selectedId?: string | number; // which Dashboard record has been selected
  loaded: boolean; // has the Dashboard list been loaded
  success?: null;
  error?: string | null; // last none error (if any)
}

export interface DashboardPartialState {
  readonly [DASHBOARD_FEATURE_KEY]: State;
}

// TODO: Delete
export const dashboardAdapter: EntityAdapter<DashboardEntity> = createEntityAdapter<
  DashboardEntity
>();

// TODO: Rewrite
export const initialState: State = dashboardAdapter.getInitialState({
  // set initial required properties
  loaded: null,
  success: null,
  error: null,
});

export function DashboardReducer(
  state = initialState,
  action: Action
) {

  const dashboardAction = action as DashboardActions.DashboardActions;

  switch (dashboardAction.type) {
    case EVENTS.LOADING:
      return {
        ...state,
        loaded: true,
      };

    case EVENTS.SUCCESS:
      return {
        ...state,
        loaded: true,
      };

    case EVENTS.FAILURE:
      const error = dashboardAction.error;
      return {
        ...state,
        error,
      };

    default:
      return state;
  }
}
