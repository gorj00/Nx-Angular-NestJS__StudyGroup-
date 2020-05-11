import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { StudyGroupListService } from './service/study-group-list.service';
import * as EVENTS from './study-group-list.events';
import * as actions from './study-group-list.actions';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

@Injectable()
export class StudyGroupListEffects {

  @Effect() studyGroups$ = this.actions$.pipe(
    ofType<actions.StudyGroupListRequest>(EVENTS.REQUEST_ALL),
    switchMap(() =>
        this.service.fetchGroupList().pipe(
            map((data: models.IStudyGroupList) => new actions.StudyGroupListSResponse(data)),
            catchError(error => of(new actions.StudyGroupFailure(error))),
        ),
    ),
  );

  constructor(private actions$: Actions,
              private service: StudyGroupListService) {}
}
