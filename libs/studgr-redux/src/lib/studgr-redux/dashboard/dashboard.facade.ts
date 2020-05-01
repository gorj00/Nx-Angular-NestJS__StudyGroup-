import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromDashboard from './dashboard.reducer';
import * as DashboardSelectors from './dashboard.selectors';
import * as DasboardActions from './dashboard.actions';

@Injectable()
export class DashboardFacade {
  loaded$ = this.store.pipe(select(DashboardSelectors.getDashboardLoaded));
  allDashboard$ = this.store.pipe(select(DashboardSelectors.getAllDashboard));
  selectedDashboard$ = this.store.pipe(select(DashboardSelectors.getSelected));

  constructor(private store: Store<fromDashboard.DashboardPartialState>) {}

  loading() {
    this.store.dispatch(new DasboardActions.DasboardLoading());
  }

}
