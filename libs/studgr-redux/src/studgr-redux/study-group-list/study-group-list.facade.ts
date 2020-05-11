import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromStudyGroupList from './study-group-list.reducer';
import * as selectors from './study-group-list.selectors';
import * as actions from './study-group-list.actions';

@Injectable()
export class StudyGroupListFacade {
  getAllStudyGroups$ = this.store.pipe(select(selectors.getAllStudyGroups));
  getStudentStdyGroups$ = this.store.pipe(
    select(selectors.getStudentStudyGroups)
  );

  constructor(
    private store: Store<fromStudyGroupList.StudyGroupListPartialState>
  ) {}

  fetchAllStudyGroups = (): void => {
    this.store.dispatch(new actions.StudyGroupListRequest());
  };

}
