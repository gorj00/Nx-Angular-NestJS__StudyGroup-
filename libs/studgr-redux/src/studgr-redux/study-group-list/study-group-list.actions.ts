import { Action } from '@ngrx/store';
import * as EVENTS from './study-group-list.events';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

// All study groups list
export class StudyGroupListRequest implements Action {
  readonly type = EVENTS.REQUEST_ALL;
}

export class StudyGroupListSResponse implements Action {
  readonly type = EVENTS.RESPONSE_ALL;
  constructor(public payload: models.IStudyGroupList) {}
}

// Feature common failure
export class StudyGroupFailure implements Action {
  readonly type = EVENTS.FAILURE;
  constructor(public error: any) {}
}

export type StudyGroupActions =
              StudyGroupListRequest   |
              StudyGroupListSResponse |
              StudyGroupFailure;
