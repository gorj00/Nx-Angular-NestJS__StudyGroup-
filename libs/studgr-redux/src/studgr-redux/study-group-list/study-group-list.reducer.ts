import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as EVENTS from './study-group-list.events';
import * as actions from './study-group-list.actions';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

export const STUDYGROUPLIST_FEATURE_KEY = 'studyGroupList';

// export interface State extends EntityState<StudyGroupListEntity> {
//   selectedId?: string | number; // which StudyGroupList record has been selected
//   loaded: boolean; // has the StudyGroupList list been loaded
//   error?: string | null; // last none error (if any)
// }

export interface StudyGroupListPartialState {
  readonly [STUDYGROUPLIST_FEATURE_KEY]: models.IStudyGroupListPartialState;
}

// export const studyGroupListAdapter: EntityAdapter<StudyGroupListEntity> = createEntityAdapter<
//   StudyGroupListEntity
// >();

export const initialState: models.IStudyGroupListPartialState = {
  allStudyGroups: null,
  studentStudyGroups: null,
};


export function StudyGroupListReducer(
  state = initialState,
  action: Action
) {

  const studyGroupAction = action as actions.StudyGroupActions;

  switch (studyGroupAction.type) {
    case EVENTS.REQUEST_ALL:
      return {
        ...state,
        loading: true,
      };

    case EVENTS.RESPONSE_ALL:
      const allStudyGroups = studyGroupAction.payload;
      return {
        ...state,
        loading: false,
        allStudyGroups,
      };

    case EVENTS.FAILURE:
      const error = studyGroupAction.error;
      return {
        ...state,
        loading: false,
        error,
      };

    default:
      return state;
  }
}
