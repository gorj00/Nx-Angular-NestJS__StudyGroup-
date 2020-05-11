import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  STUDYGROUPLIST_FEATURE_KEY,
  StudyGroupListPartialState
} from './study-group-list.reducer';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

// Lookup the 'StudyGroupList' feature state managed by NgRx
export const getStudyGroupListState = createFeatureSelector<
  models.IStudyGroupListPartialState
>(STUDYGROUPLIST_FEATURE_KEY);

export const getAllStudyGroups = createSelector(
  getStudyGroupListState,
  (state: models.IStudyGroupListPartialState) => state.allStudyGroups
);

export const getStudentStudyGroups = createSelector(
  getStudyGroupListState,
  (state: models.IStudyGroupListPartialState) => state.studentStudyGroups
);

