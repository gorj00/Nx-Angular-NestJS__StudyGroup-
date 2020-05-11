/* Import reducers here */
import { ActionReducerMap } from '@ngrx/store';
import { StudyGroupListReducer } from './study-group-list/study-group-list.reducer';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';


// https://www.concretepage.com/angular-2/ngrx/ngrx-store-4-angular-5-tutorial

export interface AppState {
  studyGroupList?: models.IStudyGroupListPartialState;
}

export const reducers: ActionReducerMap<AppState> = {
  studyGroupList: StudyGroupListReducer,
};
