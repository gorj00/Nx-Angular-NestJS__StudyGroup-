import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './studgr-redux.reducers';
import * as fromDashboard from './studgr-redux/dashboard/dashboard.reducer';
import { DashboardEffects } from './studgr-redux/dashboard/dashboard.effects';
import { DashboardFacade } from './studgr-redux/dashboard/dashboard.facade';
import { environment } from '../../../../apps/study-group/src/environments/environment';

/* To use redux in an app, import this module and declare it as an import in the app module */

/* Generate a new redux feature:
* ng g @nrwl/angular:ngrx <feature-name> --module=libs/studgr-redux/src/lib/studgr-redux.module.ts --directory studgr-redux/<feature-name> --facade
*/

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(
      fromDashboard.DASHBOARD_FEATURE_KEY,
      fromDashboard.DashboardReducer,
    ),
    EffectsModule.forFeature([DashboardEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [DashboardFacade]
})
export class StudgrReduxModule {}
